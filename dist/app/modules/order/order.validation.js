"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
const objectIdRegex = /^[0-9a-fA-F]{24}$/;
// Zod validation schema for the Order model
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    product: zod_1.z
        .string()
        .regex(objectIdRegex, 'Invalid bicycle ID format')
        .transform((id) => new mongoose_1.Types.ObjectId(id)),
    quantity: zod_1.z.number().min(1, 'Quantity must be at least 1'),
    totalPrice: zod_1.z.number().min(0, 'Total price cannot be negative'),
});
exports.default = orderValidationSchema;
