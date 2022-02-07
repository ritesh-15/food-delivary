"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Error_Handler_1 = __importDefault(require("../services/Error-Handler"));
var adminMiddleware = function (req, res, next) {
    var activeuser = req.user;
    if (activeuser.isAdmin)
        return next();
    return next(Error_Handler_1.default.forbidden("Access denied!"));
};
exports.default = adminMiddleware;
