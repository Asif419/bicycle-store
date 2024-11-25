import { Bicycle } from '../bicycle/bicycle.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (orderData: TOrder) => {
  const bicycle = await Bicycle.findById(orderData.product);
  if (!bicycle || bicycle.isDeleted) {
    throw new Error('Bicycle not Found');
  }
  if (bicycle.quantity < orderData.quantity) {
    throw new Error('Insufficient stock for the bicycle');
  }
  bicycle.quantity -= orderData.quantity;
  if (bicycle.quantity === 0) {
    bicycle.inStock = false;
  }
  await bicycle.save();
  const result = await Order.create(orderData);
  return result;
};

const getRevenueFromDB = async () => {
  const result = await Order.aggregate([
    {
      $lookup: {
        from: 'bicycles',
        localField: 'product',
        foreignField: '_id',
        as: 'bicycleDetails',
      },
    },
    {
      $unwind: '$bicycleDetails',
    },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: {
            $multiply: ['$bicycleDetails.price', '$quantity'],
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const orderServices = {
  createOrderIntoDB,
  getRevenueFromDB,
};
