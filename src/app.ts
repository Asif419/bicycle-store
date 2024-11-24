import express, { Request, Response } from 'express';
import cors from 'cors';
import { bicycleRoutes } from './app/modules/bicycle/bicycle.route';

const app = express();

//parsers
app.use(express.json());
app.use(cors());

// application route for product(bicycle)
app.use('/api/products', bicycleRoutes);

// checking
app.get('/', (req: Request, res: Response) => {
  res.send('Its running');
});

export default app;
