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
exports.orderServices = void 0;
const bicycle_model_1 = require("../bicycle/bicycle.model");
const order_model_1 = require("./order.model");
const createOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const bicycle = yield bicycle_model_1.Bicycle.findById(orderData.product);
    if (!bicycle) {
        throw new Error('Bicycle not Found');
    }
    if (bicycle.quantity < orderData.quantity) {
        throw new Error('Insufficient stock for the bicycle');
    }
    bicycle.quantity -= orderData.quantity;
    if (bicycle.quantity === 0) {
        bicycle.inStock = false;
    }
    yield bicycle.save();
    const result = yield order_model_1.Order.create(orderData);
    return result;
});
const getRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.aggregate([
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
});
exports.orderServices = {
    createOrderIntoDB,
    getRevenueFromDB,
};
