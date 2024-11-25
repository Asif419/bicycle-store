"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bicycleServices = void 0;
const bicycle_model_1 = require("./bicycle.model");
const createBicycleIntoDB = (bicycleData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.create(bicycleData);
    return result;
});
const searchBicyclesFromDB = (term) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.find({
        $or: [
            { name: { $eq: term } },
            { brand: { $eq: term } },
            { type: { $eq: term } },
        ],
    });
    return result;
});
const getBicycleByID = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const bicycle = yield bicycle_model_1.Bicycle.findById(productID);
    if (bicycle === null || bicycle === void 0 ? void 0 : bicycle.isDeleted) {
        return null;
    }
    return bicycle;
});
const updateBicycleByID = (productID, bicycleData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.findOneAndUpdate({ _id: { $eq: productID } }, { $set: bicycleData }, { new: true });
    return result;
});
const deleteBicycleFromDB = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bicycle_model_1.Bicycle.updateOne({ _id: { $eq: productID }, isDeleted: { $ne: true } }, { isDeleted: true });
    return result;
});
exports.bicycleServices = {
    createBicycleIntoDB,
    searchBicyclesFromDB,
    getBicycleByID,
    updateBicycleByID,
    deleteBicycleFromDB,
};
