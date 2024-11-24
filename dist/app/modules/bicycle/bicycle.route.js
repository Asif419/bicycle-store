"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bicycle_controller_1 = require("./bicycle.controller");
const router = express_1.default.Router();
router.post('/', bicycle_controller_1.bicycleControllers.createBicycle);
router.get('/', bicycle_controller_1.bicycleControllers.getBicycles);
router.get('/:productID', bicycle_controller_1.bicycleControllers.getBicycleByID);
router.put('/:productID', bicycle_controller_1.bicycleControllers.updateBicycleByID);
router.delete('/:productID', bicycle_controller_1.bicycleControllers.deleteBicycleByID);
exports.bicycleRoutes = router;
