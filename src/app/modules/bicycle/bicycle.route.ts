import express from 'express';
import { bicycleControllers } from './bicycle.controller';

const router = express.Router();

router.post('/', bicycleControllers.createBicycle);
router.get('/', bicycleControllers.getBicycles);
router.get('/:bicycleID', bicycleControllers.getBicycleByID);

export const bicycleRoutes = router;
