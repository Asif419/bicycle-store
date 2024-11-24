import { Request, Response } from 'express';
import bicycleValidationSchema from './bicycle.validaiton';
import { bicycleServices } from './bicycle.service';
import { TBicycle } from './bicycle.interface';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const { bicycle: bicycleData } = req.body;

    // zod validation
    const zodPerseBicycle = bicycleValidationSchema.parse(bicycleData);
    // console.log(zodPerseBicycle);

    const result = await bicycleServices.createBicycleIntoDB(zodPerseBicycle);

    res.status(200).json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getBicycles = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;

    if (!searchTerm) {
      res.status(400).json({
        success: false,
        message: 'Search term is required',
      });
    }

    const result = await bicycleServices.searchBicyclesFromDB(searchTerm);

    res.status(200).json({
      message: 'Bicycles retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

const getBicycleByID = async (req: Request, res: Response) => {
  try {
    const bicycleID = req.params.bicycleID;
    console.log(bicycleID);

    const result = await bicycleServices.getBicycleByID(bicycleID);

    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};

export const bicycleControllers = {
  createBicycle,
  getBicycles,
  getBicycleByID,
};
