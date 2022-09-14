import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth-routes";
import errorHandler from "./middlewares/error-handler";
import connection from "./db/connection";
import ErrorHandler from "./services/Error-Handler";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import passport from "passport";
import { passportJwt } from "./middlewares/passport";
import applicationsRoutes from "./routes/application-routes";
import uploadRouter from "./routes/uploadfile-routes";
import path from "path";
import morgan from "morgan";
import userRouter from "./routes/user-routes";
import { Server } from "socket.io";
import restaurantsRouter from "./routes/restaurants-routes";
import productRouter from "./routes/product-routes";
import orderRouter from "./routes/order-routes";

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json({ limit: "10mb" }));

app.use(cookieParser());

app.use(passport.initialize());
passportJwt(passport);

app.use(morgan("dev"));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(helmet());

// database connection
connection();

// routes

const URL_START: string = "/api/v1";

app.use(URL_START, authRoutes);

app.use(URL_START, applicationsRoutes);

app.use(URL_START, uploadRouter);

app.use(`${URL_START}/user`, userRouter);

app.use(URL_START, restaurantsRouter);

app.use(URL_START, productRouter);

app.use(URL_START, orderRouter);

// error handler

app.use((req: Request, res: Response, next: NextFunction) => {
  return next(ErrorHandler.notFound("No route found!"));
});

app.use(errorHandler);

const server = app.listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`)
);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  socket.on("join-application", (id: string) => {
    socket.join(id);

    socket.on("update-application", (data: any) => {
      io.to(id).emit("updated-application", data);
    });

    socket.on("deleted-application", (data: any) => {
      io.to(id).emit("application-deleted", data);
    });
  });

  socket.on("join-admin", () => {
    socket.join("admin");
  });

  socket.on("new-application", (application: any) => {
    io.to("admin").emit("new-restaurant-application", application);
  });

  socket.on("join-restaurant", (id: string) => {
    socket.join(id);
  });

  socket.on("new-order", (order: any) => {
    io.to(order.restaurant.userId).emit("new-order-created", order);
  });

  socket.on("order-room", (id: string) => {
    socket.join(id);

    socket.on("canceled-order", (order) => {
      io.to(id).emit("order-canceled", order);
    });

    socket.on("order-status-updated", (order) => {
      io.to(id).emit("order-updated", order);
    });
  });
});
