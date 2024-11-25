import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { orderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  let setResponse = false;
  try {
    const orderData = req.body;

    // zod validation
    const zodPerseOrder = orderValidationSchema.parse(orderData);

    const result = await orderServices.createOrderIntoDB(zodPerseOrder);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    if (err.message === 'Bicycle not Found' && !setResponse) {
      res.status(404).json({
        success: false,
        message: 'Bicycle not found in the inventory.',
      });
      setResponse = true;
    } else if (
      err.message === 'Insufficient stock for the bicycle' &&
      !setResponse
    ) {
      res.status(400).json({
        success: false,
        message: 'Insufficient stock to fulfill the order',
      });
      setResponse = true;
    } else if (!setResponse) {
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
        error: err,
      });
    }
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getRevenueFromDB();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: {
        result,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const orderControllers = {
  createOrder,
  getRevenue,
};
