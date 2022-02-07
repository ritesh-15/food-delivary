"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(message, status) {
        this.message = message;
        this.status = status;
        this.generatedAt = new Date(Date.now());
    }
    ErrorHandler.badRequest = function (message) {
        if (message === void 0) { message = "Bad request!"; }
        return new ErrorHandler(message, 400);
    };
    ErrorHandler.notFound = function (message) {
        if (message === void 0) { message = "Not found!"; }
        return new ErrorHandler(message, 404);
    };
    ErrorHandler.unAuthorised = function (message) {
        if (message === void 0) { message = "Un authorised!"; }
        return new ErrorHandler(message, 401);
    };
    ErrorHandler.serverError = function (message) {
        if (message === void 0) { message = "Internal server error!"; }
        return new ErrorHandler(message, 500);
    };
    ErrorHandler.forbidden = function (message) {
        if (message === void 0) { message = "Forbidden!"; }
        return new ErrorHandler(message, 403);
    };
    ErrorHandler.unProcessebleEntity = function (message) {
        if (message === void 0) { message = "Unprocesseble entity"; }
        return new ErrorHandler(message, 422);
    };
    return ErrorHandler;
}());
exports.default = ErrorHandler;
