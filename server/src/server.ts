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

const app = express();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json({ limit: "10mb" }));

app.use(cookieParser());

app.use(passport.initialize());
passportJwt(passport);

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
    origin: "http://localhost:3000",
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

// error handler

app.use((req: Request, res: Response, next: NextFunction) => {
  return next(ErrorHandler.notFound("No route found!"));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
