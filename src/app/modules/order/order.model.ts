import { model, Schema, Types } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: true},
  product: { type: Schema.Types.ObjectId, ref: 'Bicycle', required: true },
  quantity: { type: Number, required: true, min: 1 },
  totalPrice: { type: Number, required: true, min: 0 },
});

export const Order = model<TOrder>('Order', orderSchema);
