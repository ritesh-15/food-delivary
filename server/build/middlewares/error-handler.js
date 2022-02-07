"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Error_Handler_1 = __importDefault(require("../services/Error-Handler"));
var errorHandler = function (error, req, res, next) {
    if (error instanceof Error_Handler_1.default) {
        return res.status(error.status).json({
            ok: false,
            error: {
                message: error.message,
                generatedAt: error.generatedAt,
                status: error.status,
            },
        });
    }
    else {
        console.log(error.message);
        return res.status(500).json({
            ok: false,
            error: {
                message: "Internal Server Error",
                generatedAt: new Date(Date.now()),
                status: 500,
            },
        });
    }
};
exports.default = errorHandler;
