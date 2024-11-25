"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, 'email is required'] },
    product: {
        type: String,
        ref: 'Bicycle',
        required: [true, 'product is required'],
    },
    quantity: { type: Number, required: [true, 'quantity is required'], min: 1 },
    totalPrice: {
        type: Number,
        required: [true, 'totalPrice is required'],
        min: 0,
    },
});
exports.Order = (0, mongoose_1.model)('Order', orderSchema);
