"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var applicationValidation_1 = require("../validation/applicationValidation");
var applications_modal_1 = __importDefault(require("../models/applications-modal"));
var secrets_1 = require("../keys/secrets");
var restaurant_modal_1 = __importDefault(require("../models/restaurant-modal"));
var EmailService_1 = __importDefault(require("../services/EmailService"));
var user_model_1 = __importDefault(require("../models/user-model"));
var promises_1 = require("fs/promises");
var path_1 = __importDefault(require("path"));
var ApplicationController = /** @class */ (function () {
    function ApplicationController() {
    }
    ApplicationController.newApplication = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, isAgreed, restaurantInfo, addressInfo, images, documents, currentUser, error_1, newApplicationData, isApplicationAlreadyExists, application, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, isAgreed = _a.isAgreed, restaurantInfo = _a.restaurantInfo, addressInfo = _a.addressInfo, images = _a.images, documents = _a.documents;
                        currentUser = req.user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, applicationValidation_1.newAplicationValidation.validateAsync(req.body)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                    case 4:
                        newApplicationData = {
                            userId: currentUser._id,
                            restaurantInfo: restaurantInfo,
                            addressInfo: addressInfo,
                            isAgreed: isAgreed,
                            restaurantID: "".concat(new Date().getFullYear()).concat(Math.floor(Math.random() * 1e10)),
                            documents: {
                                applicantProof: {
                                    url: "".concat(secrets_1.APP_BASE_URL, "/uploads/").concat(documents.applicantProof.filename),
                                    fileType: documents.applicantProof.fileType,
                                    filename: documents.applicantProof.filename,
                                },
                                foodAuthorityCertificate: {
                                    url: "".concat(secrets_1.APP_BASE_URL, "/uploads/").concat(documents.foodAuthorityCertificate.filename),
                                    fileType: documents.foodAuthorityCertificate.fileType,
                                    filename: documents.foodAuthorityCertificate.filename,
                                },
                            },
                            images: {
                                url: "".concat(secrets_1.APP_BASE_URL, "/uploads/").concat(images.filename),
                                filename: images.filename,
                                fileType: images.fileType,
                            },
                        };
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 8, , 9]);
                        return [4 /*yield*/, applications_modal_1.default.findOne({
                                userId: currentUser._id,
                            })];
                    case 6:
                        isApplicationAlreadyExists = _b.sent();
                        if (isApplicationAlreadyExists)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("Application already exists!"))];
                        return [4 /*yield*/, applications_modal_1.default.create(newApplicationData)];
                    case 7:
                        application = _b.sent();
                        return [2 /*return*/, res.json({ ok: true, application: application })];
                    case 8:
                        error_2 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ApplicationController.getSingleApplication = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, currentUser, application, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.query.id;
                        currentUser = req.user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        application = void 0;
                        if (!id) return [3 /*break*/, 3];
                        return [4 /*yield*/, applications_modal_1.default.findById(id).populate("userId")];
                    case 2:
                        application = _a.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, applications_modal_1.default.findOne({
                            userId: currentUser._id,
                        }).populate("userId")];
                    case 4:
                        application = _a.sent();
                        _a.label = 5;
                    case 5:
                        if (!application)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Application not found!"))];
                        return [2 /*return*/, res.json({ ok: true, application: application })];
                    case 6:
                        error_3 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ApplicationController.allApplications = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var applications, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, applications_modal_1.default.find().sort({ createdAt: -1 })];
                    case 1:
                        applications = _a.sent();
                        return [2 /*return*/, res.json({ ok: true, applications: applications })];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ApplicationController.updateApplication = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var body, id, error_5, foundApplication, updatedApplication, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = req.body;
                        id = req.query.id;
                        if (!body || !id)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, applicationValidation_1.updateApplicationValidation.validateAsync(req.body)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                    case 4:
                        _a.trys.push([4, 7, , 8]);
                        return [4 /*yield*/, applications_modal_1.default.findOne({ _id: id })];
                    case 5:
                        foundApplication = _a.sent();
                        if (!foundApplication)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Application not found!"))];
                        if (foundApplication.status === "pending")
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("Application is under process!"))];
                        return [4 /*yield*/, applications_modal_1.default.findOneAndUpdate({ _id: id }, { $set: __assign(__assign({}, body), { status: "pending" }) }, { new: true }).populate("userId")];
                    case 6:
                        updatedApplication = _a.sent();
                        return [2 /*return*/, res.json({ ok: true, application: updatedApplication })];
                    case 7:
                        error_6 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ApplicationController.deleteApplication = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, foundApplication, user, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.query.id;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, applications_modal_1.default.findOne({ _id: id })];
                    case 2:
                        foundApplication = _a.sent();
                        if (!foundApplication)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Application not found!"))];
                        return [4 /*yield*/, user_model_1.default.findOne({ _id: foundApplication.userId })];
                    case 3:
                        user = _a.sent();
                        if (!user)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("User not found!"))];
                        user.isRestaurantOwner = false;
                        return [4 /*yield*/, user.save()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, (0, promises_1.unlink)(path_1.default.join(__dirname, "../uploads/".concat(foundApplication.images.filename)))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, (0, promises_1.unlink)(path_1.default.join(__dirname, "../uploads/".concat(foundApplication.documents.applicantProof.filename)))];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, (0, promises_1.unlink)(path_1.default.join(__dirname, "../uploads/".concat(foundApplication.documents.foodAuthorityCertificate.filename)))];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, applications_modal_1.default.deleteOne({ _id: id })];
                    case 8:
                        _a.sent();
                        return [2 /*return*/, res.json({ ok: true, deleted: true })];
                    case 9:
                        error_7 = _a.sent();
                        console.log(error_7);
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    // admin route
    ApplicationController.updateStatus = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, status, rejectionDetails, application, isRestaurantFound, newRestaurantData, restaurant, mail, error_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, status = _a.status, rejectionDetails = _a.rejectionDetails;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("Id not found!"))];
                        if (!status)
                            return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, , 11]);
                        return [4 /*yield*/, applications_modal_1.default.findOne({ _id: id })];
                    case 2:
                        application = _b.sent();
                        if (!application)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Application not found!"))];
                        if (application.status === "accepted")
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("Application is already accepted!"))];
                        return [4 /*yield*/, restaurant_modal_1.default.findOne({
                                userId: application.userId,
                            })];
                    case 3:
                        isRestaurantFound = _b.sent();
                        if (isRestaurantFound)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest("Restaurant already exists!"))];
                        return [4 /*yield*/, applications_modal_1.default.findOneAndUpdate({ _id: application._id }, {
                                $set: req.body,
                            }, { new: true }).populate("userId")];
                    case 4:
                        application = _b.sent();
                        if (!application)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Application not found!"))];
                        if (!(application.status === "accepted")) return [3 /*break*/, 9];
                        newRestaurantData = {
                            restaurantInfo: application.restaurantInfo,
                            addressInfo: application.addressInfo,
                            documents: application.documents,
                            userId: application.userId,
                            status: "active",
                            restaurantID: application.restaurantID,
                            images: {
                                filename: application.images.filename,
                                fileType: application.images.fileType,
                                url: "".concat(secrets_1.APP_BASE_URL, "/uploads/").concat(application.images.filename),
                            },
                        };
                        return [4 /*yield*/, restaurant_modal_1.default.create(newRestaurantData)];
                    case 5: return [4 /*yield*/, (_b.sent()).populate("userId")];
                    case 6:
                        restaurant = _b.sent();
                        // update the user
                        return [4 /*yield*/, user_model_1.default.updateOne({ _id: application.userId }, {
                                $set: {
                                    isRestaurantOwner: true,
                                },
                            }, { new: true })];
                    case 7:
                        // update the user
                        _b.sent();
                        mail = new EmailService_1.default("".concat(restaurant.restaurantInfo.email), "Application of restaurant accepted successfully!", "<h1>Hello ".concat(restaurant.userId.name, ",</h1>\n          <p>Your application having application id ").concat(application._id, " has been accepted succesfully. We have genereated new restaurant id for you ").concat(restaurant.restaurantID, ". You can login now and check your restaurant dashboard. Now you can add your restaurant food products and taking delivary.</p>\n          "));
                        return [4 /*yield*/, mail.send()];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [2 /*return*/, res.json({ ok: true, application: application })];
                    case 10:
                        error_8 = _b.sent();
                        console.log(error_8);
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return ApplicationController;
}());
exports.default = ApplicationController;
