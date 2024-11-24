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

const getBicycleByID = async (bicycleID: string) => {
  const result = await Bicycle.findById(bicycleID);
  return result;
};

export const bicycleServices = {
  createBicycleIntoDB,
  searchBicyclesFromDB,
  getBicycleByID,
};
