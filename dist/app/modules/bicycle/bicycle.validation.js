"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partialBicycleValidationSchema = exports.bicycleValidationSchema = void 0;
const zod_1 = require("zod");
const bicycleValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    brand: zod_1.z.string().min(1, 'Brand is required'),
    price: zod_1.z.number().positive('Price must be a positive number'),
    type: zod_1.z.string().min(1, 'Type is required'),
    description: zod_1.z.string().min(1, 'Description is required'),
    quantity: zod_1.z.number().nonnegative('Quantity cannot be negative'),
    inStock: zod_1.z.boolean(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    isDeleted: zod_1.z.boolean().optional(),
});
exports.bicycleValidationSchema = bicycleValidationSchema;
const partialBicycleValidationSchema = bicycleValidationSchema.partial();
exports.partialBicycleValidationSchema = partialBicycleValidationSchema;
