import { z } from 'zod';

// Zod validation schema for the Order model
const orderValidationSchema = z.object({
  email: z.string().email('Invalid email address'),
  product: z.string().regex(/^[0-9a-fA-F]{24}$/, 'Invalid bicycle ID'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  totalPrice: z.number().min(0, 'Total price cannot be negative'),
});
export default orderValidationSchema;
