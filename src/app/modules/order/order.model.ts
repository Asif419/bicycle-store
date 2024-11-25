import { model, Schema, Types } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  email: { type: String, required: [true, 'email is required'] },
  product: { type: Schema.Types.ObjectId, ref: 'Bicycle', required: true },
  quantity: { type: Number, required: [true, 'quantity is required'], min: 1 },
  totalPrice: {
    type: Number,
    required: [true, 'totalPrice is required'],
    min: 0,
  },
});

export const Order = model<TOrder>('Order', orderSchema);
