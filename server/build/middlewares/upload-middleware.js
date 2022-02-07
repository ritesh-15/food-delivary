"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var crypto_1 = __importDefault(require("crypto"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path_1.default.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
        var uniqueFileName = "".concat(Date.now(), "-").concat(crypto_1.default
            .randomBytes(6)
            .toString("hex")).concat(path_1.default.extname(file.originalname));
        cb(null, uniqueFileName);
    },
});
var upload = (0, multer_1.default)({ storage: storage });
exports.upload = upload;
