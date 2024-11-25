"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleControllers = void 0;
const bicycle_validation_1 = require("./bicycle.validation");
const bicycle_service_1 = require("./bicycle.service");
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bicycleData = req.body;
        // zod validation
        const zodPerseBicycle = bicycle_validation_1.bicycleValidationSchema.parse(bicycleData);
        const result = yield bicycle_service_1.bicycleServices.createBicycleIntoDB(zodPerseBicycle);
        res.status(200).json({
            message: 'Bicycle created successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
});
const getBicycles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let responseSent = false;
    try {
        const searchTerm = req.query.searchTerm;
        if (!searchTerm) {
            res.status(400).json({
                success: false,
                message: 'Search term is required',
            });
            responseSent = true;
        }
        const result = yield bicycle_service_1.bicycleServices.searchBicyclesFromDB(searchTerm);
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err,
        });
    }
});
const getBicycleByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let responseSent = false;
    try {
        const productID = req.params.productID;
        const result = yield bicycle_service_1.bicycleServices.getBicycleByID(productID);
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Provide Bicycle ID properly',
            error: err,
        });
    }
});
const updateBicycleByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let responseSent = false;
    try {
        const productID = req.params.productID;
        const bicycleData = req.body;
        // zod validation
        const zodPerseBicycle = bicycle_validation_1.partialBicycleValidationSchema.parse(bicycleData);
        const result = yield bicycle_service_1.bicycleServices.updateBicycleByID(productID, zodPerseBicycle);
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Bicycle not found',
        });
    }
});
const deleteBicycleByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productID = req.params.productID;
        const result = yield bicycle_service_1.bicycleServices.deleteBicycleFromDB(productID);
        if (result.modifiedCount > 0) {
            res.status(200).json({
                message: 'Bicycle deleted successfully',
                success: true,
            });
        }
        else {
            res.status(404).json({
                message: 'Bicycle not found',
                success: false,
            });
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: `Cycle can't found or already deleted`,
        });
    }
});
exports.bicycleControllers = {
    createBicycle,
    getBicycles,
    getBicycleByID,
    updateBicycleByID,
    deleteBicycleByID,
};
