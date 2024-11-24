import express, { Request, Response } from 'express';
import cors from 'cors';
import { bicycleRoutes } from './app/modules/bicycle/bicycle.route';
import { orderRoutes } from './app/modules/order/order.route';

const app = express();

//parsers
app.use(express.json());
app.use(cors());

// application route for product(bicycle)
app.use('/api/products', bicycleRoutes);
app.use('/api/orders', orderRoutes);

// checking
app.get('/', (req: Request, res: Response) => {
  res.send('Its running');
});

export default app;
