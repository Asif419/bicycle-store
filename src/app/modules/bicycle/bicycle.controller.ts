import { Request, Response } from 'express';
import {
  bicycleValidationSchema,
  partialBicycleValidationSchema,
} from './bicycle.validation';
import { bicycleServices } from './bicycle.service';
import { TBicycle } from './bicycle.interface';
import { string } from 'zod';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const bicycleData = req.body;

    // zod validation
    const zodPerseBicycle = bicycleValidationSchema.parse(bicycleData);

    const result = await bicycleServices.createBicycleIntoDB(zodPerseBicycle);

    res.status(200).json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getBicycles = async (req: Request, res: Response) => {
  let responseSent = false;

  try {
    const searchTerm = req.query.searchTerm as string;

    if (!searchTerm) {
      res.status(400).json({
        success: false,
        message: 'Search term is required',
      });
      responseSent = true;
    }

    const result = await bicycleServices.searchBicyclesFromDB(searchTerm);

    // Check if no bicycles were found
    if (!responseSent) {
      if (result.length === 0) {
        res.status(404).json({
          message: 'No bicycles found matching the search term.',
          success: false,
        });
        responseSent = true;
      }
    }
    if (!responseSent) {
      res.status(200).json({
        message: 'Bicycles retrieved successfully',
        success: true,
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getBicycleByID = async (req: Request, res: Response) => {
  let responseSent = false;
  try {
    const productID = req.params.productID;
    const result = await bicycleServices.getBicycleByID(productID);

    if (result === null) {
      res.status(400).json({
        success: false,
        message: 'Bicycle not found',
      });
      responseSent = true;
    }
    if (!responseSent) {
      res.status(200).json({
        message: 'Bicycle retrieved successfully',
        success: true,
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Provide Bicycle ID properly',
      error: err,
    });
  }
};

const updateBicycleByID = async (req: Request, res: Response) => {
  let responseSent = false;
  try {
    const productID = req.params.productID;
    const bicycleData = req.body;

    // zod validation
    const zodPerseBicycle = partialBicycleValidationSchema.parse(bicycleData);

    const result = await bicycleServices.updateBicycleByID(
      productID,
      zodPerseBicycle,
    );

    if (result === null) {
      res.status(404).json({
        success: false,
        message: 'Bicycle not found or already deleted.',
      });
      responseSent = true;
    }

    if (!responseSent) {
      res.status(200).json({
        message: 'Bicycle updated successfully',
        success: true,
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Bicycle not found',
    });
  }
};

const deleteBicycleByID = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productID;

    const result = await bicycleServices.deleteBicycleFromDB(productID);

    if (result.modifiedCount > 0) {
      res.status(200).json({
        message: 'Bicycle deleted successfully',
        success: true,
      });
    } else {
      res.status(404).json({
        message: 'Bicycle not found',
        success: false,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Cycle can't found or already deleted`,
    });
  }
};

export const bicycleControllers = {
  createBicycle,
  getBicycles,
  getBicycleByID,
  updateBicycleByID,
  deleteBicycleByID,
};
