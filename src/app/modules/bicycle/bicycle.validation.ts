import { z } from 'zod';

const bicycleValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().positive('Price must be a positive number'),
  type: z.string().min(1, 'Type is required'),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().nonnegative('Quantity cannot be negative'),
  inStock: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  isDeleted: z.boolean().optional(),
});

const partialBicycleValidationSchema = bicycleValidationSchema.partial();

export { bicycleValidationSchema, partialBicycleValidationSchema };
