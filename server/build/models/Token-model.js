"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TokenSchema = new mongoose_1.Schema({
    token: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("tokens", TokenSchema);
