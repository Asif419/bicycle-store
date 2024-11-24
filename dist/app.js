"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const bicycle_route_1 = require("./app/modules/bicycle/bicycle.route");
const order_route_1 = require("./app/modules/order/order.route");
const app = (0, express_1.default)();
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application route for product(bicycle)
app.use('/api/products', bicycle_route_1.bicycleRoutes);
app.use('/api/orders', order_route_1.orderRoutes);
// checking
app.get('/', (req, res) => {
    res.send('Its running');
});
exports.default = app;
