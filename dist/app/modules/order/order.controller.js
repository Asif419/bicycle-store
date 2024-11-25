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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const order_validation_1 = __importDefault(require("./order.validation"));
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let setResponse = false;
    try {
        const orderData = req.body;
        // zod validation
        const zodPerseOrder = order_validation_1.default.parse(orderData);
        const result = yield order_services_1.orderServices.createOrderIntoDB(zodPerseOrder);
        res.status(200).json({
            message: 'Order created successfully',
            success: true,
            data: result,
        });
    }
    catch (err) {
        if (err.message === 'Bicycle not Found' && !setResponse) {
            res.status(404).json({
                success: false,
                message: 'Bicycle not found in the inventory.',
            });
            setResponse = true;
        }
        else if (err.message === 'Insufficient stock for the bicycle' &&
            !setResponse) {
            res.status(400).json({
                success: false,
                message: 'Insufficient stock to fulfill the order',
            });
            setResponse = true;
        }
        else if (!setResponse) {
            res.status(500).json({
                success: false,
                message: 'Something went wrong',
                error: err,
            });
        }
    }
});
const getRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.orderServices.getRevenueFromDB();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: {
                result,
            },
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong',
            error: err,
        });
    }
});
exports.orderControllers = {
    createOrder,
    getRevenue,
};
