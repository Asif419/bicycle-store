import { Types } from 'mongoose';

export interface TOrder {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}
