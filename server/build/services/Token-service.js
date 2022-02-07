"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.generateTokens = function (_id) {
        var privateKey = fs_1.default.readFileSync(path_1.default.join(__dirname, "../keys/private.pem"));
        var accessToken = jsonwebtoken_1.default.sign({ _id: _id }, privateKey, {
            expiresIn: "30min",
            algorithm: "RS256",
        });
        var refreshToken = jsonwebtoken_1.default.sign({ _id: _id }, privateKey, {
            expiresIn: "1y",
            algorithm: "RS256",
        });
        return { accessToken: accessToken, refreshToken: refreshToken };
    };
    TokenService.verifyAccessToken = function (token) {
        var publicKey = fs_1.default.readFileSync(path_1.default.join(__dirname, "../keys/public.pem"));
        return jsonwebtoken_1.default.verify(token, publicKey, {
            algorithms: ["RS256"],
        });
    };
    TokenService.verifyRefreshToken = function (token) {
        var publicKey = fs_1.default.readFileSync(path_1.default.join(__dirname, "../keys/public.pem"));
        return jsonwebtoken_1.default.verify(token, publicKey, {
            algorithms: ["RS256"],
        });
    };
    return TokenService;
}());
exports.default = TokenService;
