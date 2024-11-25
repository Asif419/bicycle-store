"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycle = void 0;
const mongoose_1 = require("mongoose");
// creating a schema for bicycle
const bicycleSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Name is required'] },
    brand: { type: String, required: [true, 'Brand is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    type: { type: String, required: [true, 'Type is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    quantity: { type: Number, required: [true, 'Quantity is required'] },
    inStock: { type: Boolean, required: [true, 'inStock is required'] },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true });
// pre find Middleware
bicycleSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
bicycleSchema.pre('findOneAndUpdate', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
// creating a model using bicycleSchema
exports.Bicycle = (0, mongoose_1.model)('Bicycle', bicycleSchema);
