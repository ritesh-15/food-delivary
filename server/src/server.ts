import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRoutes from "./routes/auth-routes";
import errorHandler from "./middlewares/error-handler";

const app = express();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json({ limit: "10mb" }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(helmet());

// routes

const URL_START: string = "/api/v1";

app.use(URL_START, authRoutes);

// error handler

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
