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
var restaurant_modal_1 = __importDefault(require("../models/restaurant-modal"));
var secrets_1 = require("../keys/secrets");
var product_modal_1 = __importDefault(require("../models/product-modal"));
var promises_1 = require("fs/promises");
var path_1 = __importDefault(require("path"));
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.prototype.createNewProduct = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, image, description, price, menu, type, user, restaurant, body, product, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, name = _a.name, image = _a.image, description = _a.description, price = _a.price, menu = _a.menu, type = _a.type;
                        user = req.user;
                        if (!name || !image || !description || !price || !menu || !type)
                            return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, restaurant_modal_1.default.findOne({ userId: user._id })];
                    case 2:
                        restaurant = _b.sent();
                        if (!restaurant)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Restaurant not found!"))];
                        body = {
                            type: type,
                            name: name,
                            description: description,
                            price: price,
                            menu: menu,
                            image: {
                                url: "".concat(secrets_1.APP_BASE_URL, "/uploads/").concat(image),
                                filename: image,
                            },
                            restaurant: restaurant._id,
                        };
                        return [4 /*yield*/, product_modal_1.default.create(body)];
                    case 3:
                        product = _b.sent();
                        return [2 /*return*/, res.json({ ok: true, product: product })];
                    case 4:
                        error_1 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // delete product
    ProductController.prototype.deleteProduct = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!id)
                            return [2 /*return*/, Error_Handler_1.default.unProcessebleEntity()];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, product_modal_1.default.findOne({ _id: id })];
                    case 2:
                        product = _a.sent();
                        if (!product)
                            return [2 /*return*/, Error_Handler_1.default.notFound("Product not found!")];
                        return [4 /*yield*/, (0, promises_1.unlink)(path_1.default.join(__dirname, "../uploads/".concat(product.image.filename)))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, product_modal_1.default.deleteOne({ _id: id })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, res.json({ ok: true, message: "Product deleted successfully!" })];
                    case 5:
                        error_2 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // get single product
    ProductController.prototype.singleProduct = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, product, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.unProcessebleEntity())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, product_modal_1.default.findOne({ _id: id }).populate("restaurant")];
                    case 2:
                        product = _a.sent();
                        if (!product)
                            return [2 /*return*/, next(Error_Handler_1.default.notFound("Product not found!"))];
                        return [2 /*return*/, res.json({ ok: true, product: product })];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // update product
    ProductController.prototype.updateProduct = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, image, name, description, price, menu, type, product, images, updatedProduct, error_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, image = _a.image, name = _a.name, description = _a.description, price = _a.price, menu = _a.menu, type = _a.type;
                        if (!id)
                            return [2 /*return*/, Error_Handler_1.default.unProcessebleEntity()];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, product_modal_1.default.findOne({ _id: id })];
                    case 2:
                        product = _b.sent();
                        if (!product)
                            return [2 /*return*/, Error_Handler_1.default.notFound("Product not found!")];
                        images = void 0;
                        if (!image) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, promises_1.unlink)(path_1.default.join(__dirname, "../uploads/".concat(product.image.filename)))];
                    case 3:
                        _b.sent();
                        images = {
                            url: "".concat(secrets_1.APP_BASE_URL, "/uploads/").concat(image),
                            filename: image,
                        };
                        _b.label = 4;
                    case 4: return [4 /*yield*/, product_modal_1.default.findOneAndUpdate({ _id: id }, {
                            $set: {
                                image: images ? images : product.image,
                                name: name || product.name,
                                description: description || product.description,
                                menu: menu || product.menu,
                                price: price || product.price,
                                type: type || product.type,
                            },
                        }, { new: true }).populate("restaurant")];
                    case 5:
                        updatedProduct = _b.sent();
                        return [2 /*return*/, res.json({ ok: true, product: updatedProduct })];
                    case 6:
                        error_4 = _b.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    // Get all product
    ProductController.prototype.getAllProducts = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, products, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        if (!id)
                            return [2 /*return*/, next(Error_Handler_1.default.badRequest())];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, product_modal_1.default.find({ restaurant: id })
                                .sort({ createdAt: -1 })
                                .populate("restaurant")];
                    case 2:
                        products = _a.sent();
                        return [2 /*return*/, res.json({ ok: true, products: products })];
                    case 3:
                        error_5 = _a.sent();
                        return [2 /*return*/, next(Error_Handler_1.default.serverError())];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductController;
}());
exports.default = new ProductController();
