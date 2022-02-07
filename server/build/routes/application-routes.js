"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var application_controller_1 = __importDefault(require("../controllers/application-controller"));
var adminMiddleware_1 = __importDefault(require("../middlewares/adminMiddleware"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var router = (0, express_1.Router)();
router
    .route("/application/new")
    .post(authMiddleware_1.authMiddleware, application_controller_1.default.newApplication);
router
    .route("/application")
    .get(authMiddleware_1.authMiddleware, application_controller_1.default.getSingleApplication)
    .put(authMiddleware_1.authMiddleware, application_controller_1.default.updateApplication)
    .delete(authMiddleware_1.authMiddleware, application_controller_1.default.deleteApplication);
router
    .route("/applications")
    .get([authMiddleware_1.authMiddleware, adminMiddleware_1.default], application_controller_1.default.allApplications);
router
    .route("/application/update-status/:id")
    .put([authMiddleware_1.authMiddleware, adminMiddleware_1.default], application_controller_1.default.updateStatus);
exports.default = router;
