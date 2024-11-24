import { model, Schema } from 'mongoose';
import { TBicycle } from './bicycle.interface';

// creating a schema for bicycle
const bicycleSchema = new Schema<TBicycle>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

// creating a model using bicycleSchema
export const Bicycle = model<TBicycle>('Bicycle', bicycleSchema);
