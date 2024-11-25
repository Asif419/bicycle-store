import { TBicycle } from './bicycle.interface';
import { Bicycle } from './bicycle.model';

const createBicycleIntoDB = async (bicycleData: TBicycle) => {
  const result = await Bicycle.create(bicycleData);
  return result;
};

const searchBicyclesFromDB = async (term: string) => {
  const result = await Bicycle.find({
    $or: [
      { name: { $eq: term } },
      { brand: { $eq: term } },
      { type: { $eq: term } },
    ],
  });
  return result;
};

const getBicycleByID = async (productID: string) => {
  const bicycle = await Bicycle.findById(productID);
  if (bicycle?.isDeleted) {
    return null;
  }
  return bicycle;
};

const updateBicycleByID = async (
  productID: string,
  bicycleData: Partial<TBicycle>,
) => {
  const result = await Bicycle.findOneAndUpdate(
    { _id: { $eq: productID } },
    { $set: bicycleData },
    { new: true },
  );
  return result;
};

const deleteBicycleFromDB = async (productID: string) => {
  const result = await Bicycle.updateOne(
    { _id: { $eq: productID }, isDeleted: { $ne: true } },
    { isDeleted: true },
  );
  return result;
};

export const bicycleServices = {
  createBicycleIntoDB,
  searchBicyclesFromDB,
  getBicycleByID,
  updateBicycleByID,
  deleteBicycleFromDB,
};
