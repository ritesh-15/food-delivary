"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOrderId = void 0;
var generateOrderId = function (prefix) {
    if (prefix === void 0) { prefix = "OD"; }
    var id = "".concat(prefix, "_").concat(Math.random().toString(16).slice(2));
    return id;
};
exports.generateOrderId = generateOrderId;
