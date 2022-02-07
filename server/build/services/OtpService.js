"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var secrets_1 = require("../keys/secrets");
var OtpService = /** @class */ (function () {
    function OtpService(payload, otp, expiresIn) {
        this.time = new Date();
        this.expiresIn = expiresIn || Date.now() + 1000 * 60 * 2;
        this.payload = payload;
        this.otp = otp || this.generateOtp();
        this.data = "".concat(this.payload, ".").concat(this.otp, ".").concat(this.expiresIn);
    }
    OtpService.prototype.generateOtp = function () {
        // create array of letters
        var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        // generate random string from letters array
        var otp = "";
        for (var i = 0; i < 6; i++) {
            otp += letters[Math.floor(Math.random() * letters.length)];
        }
        return otp.toUpperCase();
    };
    OtpService.prototype.hash = function () {
        return crypto_1.default
            .createHmac("sha256", secrets_1.HASH_SECRET)
            .update(this.data)
            .digest("hex");
    };
    OtpService.verify = function (email, otp, expiresIn, hash) {
        var generatedOtp = new OtpService(email, otp, expiresIn);
        return generatedOtp.hash() === hash;
    };
    return OtpService;
}());
exports.default = OtpService;
