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
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, number, name, isAdmin, isRestaurantOwner, address, password, currentUser, user, hashedPassword, updatedUser, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, number = _a.number, name = _a.name, isAdmin = _a.isAdmin, isRestaurantOwner = _a.isRestaurantOwner, address = _a.address, password = _a.password;
                        currentUser = req.user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, user_model_1.default.findOne({ _id: currentUser._id }).select("+password")];
                    case 2:
                        user = _b.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        hashedPassword = void 0;
                        if (!password) return [3 /*break*/, 4];
                        return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                    case 3:
                        hashedPassword = _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, user_model_1.default.findOneAndUpdate({ _id: currentUser._id }, {
                            $set: {
                                number: number,
                                name: name,
                                isAdmin: isAdmin,
                                isRestaurantOwner: isRestaurantOwner,
                                password: hashedPassword ? hashedPassword : user.password,
                            },
                            $addToSet: {
                                addresses: address,
                            },
                        }, {
                            new: true,
                        })];
                    case 5:
                        updatedUser = _b.sent();
                        return [2 /*return*/, res.json({ ok: true, user: updatedUser })];
                    case 6:
                        error_1 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UserController.removeAddress = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, id, user, updatedUser, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = req.user;
                        id = req.params.id;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, user_model_1.default.findOne({ _id: currentUser._id })];
                    case 2:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        return [4 /*yield*/, user_model_1.default.findOneAndUpdate({ _id: currentUser._id }, {
                                $set: {
                                    user: user,
                                },
                                $pull: {
                                    addresses: {
                                        _id: id,
                                    },
                                },
                            }, { new: true })];
                    case 3:
                        updatedUser = _a.sent();
                        return [2 /*return*/, res.json({ ok: true, user: updatedUser })];
                    case 4:
                        error_2 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserController.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var latest, users, _a, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        latest = req.query.latest;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        if (!latest) return [3 /*break*/, 3];
                        return [4 /*yield*/, user_model_1.default.find().sort({ createdAt: -1 })];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, user_model_1.default.find().sort({ createdAt: -1 }).limit(5)];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        users = _a;
                        return [2 /*return*/, res.json({ ok: true, users: users })];
                    case 6:
                        error_3 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    UserController.getSingleUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, user_model_1.default.findOne({ _id: id })];
                    case 2:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        return [2 /*return*/, res.json({ ok: true, user: user })];
                    case 3:
                        error_4 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.adminUpdateUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, isAdmin, user, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        isAdmin = req.body.isAdmin;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, user_model_1.default.findOne({ _id: id })];
                    case 2:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        user.isAdmin = isAdmin;
                        return [4 /*yield*/, user.save()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.json({ ok: true, user: user })];
                    case 4:
                        error_5 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserController.deleteUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, user_model_1.default.findOne({ _id: id })];
                    case 2:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        return [4 /*yield*/, user_model_1.default.deleteOne({ _id: user._id })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, res.json({ ok: true, user: user })];
                    case 4:
                        error_6 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
