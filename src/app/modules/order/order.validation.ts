import { z } from 'zod';
import { Types } from 'mongoose';
const objectIdRegex = /^[0-9a-fA-F]{24}$/;

// Zod validation schema for the Order model
const orderValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  product: z
  .string()
  .regex(objectIdRegex, 'Invalid bicycle ID format')
  .transform((id) => new Types.ObjectId(id)),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  totalPrice: z.number().min(0, 'Total price cannot be negative'),
});
export default orderValidationSchema;
