import dotenv from "dotenv"
import express from "express";
import cookieParser from "cookie-parser"
import authController from "./controllers/authController";
import morgan from "morgan"
const app = express();

dotenv.config()
app.use(morgan("combined"))
app.use(express.json())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use("/api/auth", authController)


app.listen(process.env.PORT, () =>
  console.log(`Started server on http://localhost:${process.env.PORT}`)
);
