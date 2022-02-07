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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Error_Handler_1 = __importDefault(require("../services/Error-Handler"));
var user_model_1 = __importDefault(require("../models/user-model"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var Token_service_1 = __importDefault(require("../services/Token-service"));
var Token_model_1 = __importDefault(require("../models/Token-model"));
var OtpService_1 = __importDefault(require("../services/OtpService"));
var UserDto_1 = __importDefault(require("../dtos/UserDto"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secrets_1 = require("../keys/secrets");
var EmailService_1 = __importDefault(require("../services/EmailService"));
var authValidation_1 = require("../validation/authValidation");
var joi_1 = __importDefault(require("joi"));
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.register = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, email, number, password, error_1, isFoundUser, hashedPassword, data, user, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, email = _a.email, number = _a.number, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, authValidation_1.registerSchemaValidation.validateAsync(req.body)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity(error_1.nessage))];
                    case 4:
                        _b.trys.push([4, 8, , 9]);
                        return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                    case 5:
                        isFoundUser = _b.sent();
                        if (isFoundUser)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("This email address is already taken!"))];
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 6:
                        hashedPassword = _b.sent();
                        data = {
                            name: name,
                            email: email,
                            password: hashedPassword,
                            number: number,
                        };
                        return [4 /*yield*/, user_model_1.default.create(data)];
                    case 7:
                        user = _b.sent();
                        return [2 /*return*/, res.json({
                                ok: true,
                                user: {
                                    email: user.email,
                                    _id: user.id,
                                },
                            })];
                    case 8:
                        error_2 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError("Internal server error !"))];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.sendOTP = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var email, schema, error_3, user, otp, hashedOtp, mail, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = req.body.email;
                        if (!email)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("All fields are required !"))];
                        schema = joi_1.default.object({
                            email: joi_1.default.string().email().required(),
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, schema.validateAsync({ email: email })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError("Invalide email address!"))];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                    case 5:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        otp = new OtpService_1.default(email);
                        hashedOtp = otp.hash();
                        hashedOtp = "".concat(hashedOtp, ".").concat(otp.expiresIn);
                        mail = new EmailService_1.default(email, "Account verification", "\n      <p>Hi, <h1>".concat(user.name, "</h1></p>\n      <p style=\"display:block;\">\n        Welcome to foodies. We are glad you are using our flatform. Your account registration has been done succesfully. To verify your account we have send verification code to you by this email.\n      </p>\n      <p style=\"display:block;\">Verification Code <h1 style=\"color:hsl(27, 97%, 54%)\">").concat(otp.otp, "</h1> </p>\n      <p style=\"display:block;\">\n        This verification code is valide for 2 min only after that it will expires. \n      </p>\n      <p>Thank you.</p>\n      "));
                        // await mail.send();
                        return [2 /*return*/, res.json({
                                ok: true,
                                otp: {
                                    hash: hashedOtp,
                                    email: email,
                                    otp: otp.otp,
                                },
                            })];
                    case 6:
                        error_4 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError("Internal server error !"))];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.verifyOtp = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, hash, code, givenHash, expiresIn, hashedOtp, isValideOtp, user, _b, accessToken, refreshToken, error_5;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.body, email = _a.email, hash = _a.hash, code = _a.code;
                        if (!email || !hash || !code)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("All fields are required!"))];
                        givenHash = hash;
                        expiresIn = parseInt(givenHash.split(".")[1]);
                        hashedOtp = givenHash.split(".")[0];
                        if (Date.now() > expiresIn)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("Otp expires!"))];
                        isValideOtp = OtpService_1.default.verify(email, code, expiresIn, hashedOtp);
                        if (!isValideOtp)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("Otp does not match!"))];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                    case 2:
                        user = _c.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        _b = Token_service_1.default.generateTokens(user._id), accessToken = _b.accessToken, refreshToken = _b.refreshToken;
                        return [4 /*yield*/, Token_model_1.default.create({ token: refreshToken, userId: user._id })];
                    case 3:
                        _c.sent();
                        res.cookie("accessToken", accessToken, {
                            maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
                            httpOnly: true,
                        });
                        res.cookie("refreshToken", refreshToken, {
                            maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
                            httpOnly: true,
                        });
                        return [2 /*return*/, res.json({
                                ok: true,
                                user: new UserDto_1.default(user),
                            })];
                    case 4:
                        error_5 = _c.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError("Internal server error !"))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.login = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, error_6, user, isValidePassword, _b, accessToken, refreshToken, error_7;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.body, email = _a.email, password = _a.password;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, authValidation_1.loginSchemaValidation.validateAsync(req.body)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _c.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity(error_6.message))];
                    case 4:
                        _c.trys.push([4, 8, , 9]);
                        return [4 /*yield*/, user_model_1.default.findOne({ email: email }).select("+password")];
                    case 5:
                        user = _c.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Email Address or password is wrong!"))];
                        return [4 /*yield*/, bcrypt_1.default.compare(password, user.password)];
                    case 6:
                        isValidePassword = _c.sent();
                        if (!isValidePassword)
                            return [2 /*return*/, next(Error_Handler_1.default.unAuthorised("Email address or password is wrong!"))];
                        _b = Token_service_1.default.generateTokens(user._id), accessToken = _b.accessToken, refreshToken = _b.refreshToken;
                        return [4 /*yield*/, Token_model_1.default.create({ token: refreshToken, userId: user._id })];
                    case 7:
                        _c.sent();
                        res.cookie("accessToken", accessToken, {
                            maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
                            httpOnly: true,
                        });
                        res.cookie("refreshToken", refreshToken, {
                            maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
                            httpOnly: true,
                        });
                        return [2 /*return*/, res.json({
                                ok: true,
                                user: new UserDto_1.default(user),
                            })];
                    case 8:
                        error_7 = _c.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError("Internal server error!"))];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.refresh = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, recivedAccessToken, recivedRefreshToken, isTokenFound, isValideToken, user, _b, accessToken, refreshToken, error_8;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = req.cookies, recivedAccessToken = _a.accessToken, recivedRefreshToken = _a.refreshToken;
                        if (!recivedAccessToken || !recivedRefreshToken)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("All fields are required!"))];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, Token_model_1.default.findOne({ token: recivedRefreshToken })];
                    case 2:
                        isTokenFound = _c.sent();
                        if (!isTokenFound)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Token not found!"))];
                        isValideToken = Token_service_1.default.verifyRefreshToken(recivedRefreshToken);
                        return [4 /*yield*/, user_model_1.default.findById(isValideToken._id)];
                    case 3:
                        user = _c.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        _b = Token_service_1.default.generateTokens(user._id), accessToken = _b.accessToken, refreshToken = _b.refreshToken;
                        return [4 /*yield*/, Token_model_1.default.deleteMany({ userId: user._id })];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, Token_model_1.default.create({ token: refreshToken, userId: user._id })];
                    case 5:
                        _c.sent();
                        res.cookie("accessToken", accessToken, {
                            maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
                            httpOnly: true,
                        });
                        res.cookie("refreshToken", refreshToken, {
                            maxAge: Date.now() + 1000 * 60 * 60 * 24 * 6,
                            httpOnly: true,
                        });
                        return [2 /*return*/, res.json({
                                ok: true,
                                user: new UserDto_1.default(user),
                            })];
                    case 6:
                        error_8 = _c.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.unAuthorised("Unauthorised!"))];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.logout = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var authId, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authId = req.user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Token_model_1.default.deleteMany({ userId: authId._id })];
                    case 2:
                        _a.sent();
                        res.clearCookie("accessToken");
                        res.clearCookie("refreshToken");
                        return [2 /*return*/, res.json({
                                ok: true,
                                logout: true,
                            })];
                    case 3:
                        error_9 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.forgotPassword = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var email, user, token, mail, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        email = req.body.email;
                        if (!email)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, user_model_1.default.findOne({ email: email })];
                    case 2:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        token = jsonwebtoken_1.default.sign({ _id: user._id }, secrets_1.FORGOT_PASSWORD_SECRET, {
                            expiresIn: "10min",
                        });
                        mail = new EmailService_1.default(email, "Password recovery link", "\n      Hello, as per your request we have generated forgot password link for you please click this link to retrive your password http://localhost:5000/forgot-password/".concat(token, ". If you not genereated it then ignore this message.\n      Thanks from foodies\n      "));
                        return [4 /*yield*/, mail.send()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.json({
                                ok: true,
                            })];
                    case 4:
                        error_10 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return AuthController;
}());
exports.default = AuthController;
