"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchemaValidation = exports.loginSchemaValidation = void 0;
var joi_1 = __importDefault(require("joi"));
exports.loginSchemaValidation = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.registerSchemaValidation = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    number: joi_1.default.number().required(),
});
