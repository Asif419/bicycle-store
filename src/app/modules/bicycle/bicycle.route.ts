import express from 'express';
import { bicycleControllers } from './bicycle.controller';

const router = express.Router();

router.post('/', bicycleControllers.createBicycle);
router.get('/', bicycleControllers.getBicycles);
router.get('/:productID', bicycleControllers.getBicycleByID);
router.put('/:productID', bicycleControllers.updateBicycleByID);
router.delete('/:productID', bicycleControllers.deleteBicycleByID);

export const bicycleRoutes = router;
