"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var uploadfile_controller_1 = __importDefault(require("../controllers/uploadfile-controller"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var upload_middleware_1 = require("../middlewares/upload-middleware");
var router = (0, express_1.Router)();
router
    .route("/upload/single")
    .post([authMiddleware_1.authMiddleware, upload_middleware_1.upload.single("file")], uploadfile_controller_1.default.uploadSingleFile);
router
    .route("/upload/multiple")
    .post([authMiddleware_1.authMiddleware, upload_middleware_1.upload.array("file", 5)], uploadfile_controller_1.default.uploadMultipleFiles);
exports.default = router;
