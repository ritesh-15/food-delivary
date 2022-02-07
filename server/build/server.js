"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var auth_routes_1 = __importDefault(require("./routes/auth-routes"));
var error_handler_1 = __importDefault(require("./middlewares/error-handler"));
var connection_1 = __importDefault(require("./db/connection"));
var Error_Handler_1 = __importDefault(require("./services/Error-Handler"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var passport_1 = __importDefault(require("passport"));
var passport_2 = require("./middlewares/passport");
var application_routes_1 = __importDefault(require("./routes/application-routes"));
var uploadfile_routes_1 = __importDefault(require("./routes/uploadfile-routes"));
var path_1 = __importDefault(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var user_routes_1 = __importDefault(require("./routes/user-routes"));
var socket_io_1 = require("socket.io");
var restaurants_routes_1 = __importDefault(require("./routes/restaurants-routes"));
var product_routes_1 = __importDefault(require("./routes/product-routes"));
var order_routes_1 = __importDefault(require("./routes/order-routes"));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 5000;
// middlewares
app.use("/uploads", express_1.default.static(path_1.default.join(__dirname, "uploads")));
app.use(express_1.default.json({ limit: "10mb" }));
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
(0, passport_2.passportJwt)(passport_1.default);
app.use((0, morgan_1.default)("dev"));
app.use((0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
}));
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));
app.use((0, helmet_1.default)());
// database connection
(0, connection_1.default)();
// routes
var URL_START = "/api/v1";
app.use(URL_START, auth_routes_1.default);
app.use(URL_START, application_routes_1.default);
app.use(URL_START, uploadfile_routes_1.default);
app.use("".concat(URL_START, "/user"), user_routes_1.default);
app.use(URL_START, restaurants_routes_1.default);
app.use(URL_START, product_routes_1.default);
app.use(URL_START, order_routes_1.default);
// error handler
app.use(function (req, res, next) {
    return next(Error_Handler_1.default.notFound("No route found!"));
});
app.use(error_handler_1.default);
var server = app.listen(PORT, function () {
    return console.log("Server listening on port ".concat(PORT));
});
var io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    },
});
io.on("connection", function (socket) {
    socket.on("join-application", function (id) {
        socket.join(id);
        socket.on("update-application", function (data) {
            io.to(id).emit("updated-application", data);
        });
        socket.on("deleted-application", function (data) {
            io.to(id).emit("application-deleted", data);
        });
    });
    socket.on("join-admin", function () {
        socket.join("admin");
    });
    socket.on("new-application", function (application) {
        io.to("admin").emit("new-restaurant-application", application);
    });
    socket.on("join-restaurant", function (id) {
        socket.join(id);
    });
    socket.on("new-order", function (order) {
        io.to(order.restaurant.userId).emit("new-order-created", order);
    });
    socket.on("order-room", function (id) {
        socket.join(id);
        socket.on("canceled-order", function (order) {
            io.to(id).emit("order-canceled", order);
        });
        socket.on("order-status-updated", function (order) {
            io.to(id).emit("order-updated", order);
        });
    });
});
