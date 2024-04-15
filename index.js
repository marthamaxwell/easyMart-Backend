import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const db = process.env.DATABASE_URL;
const myPort = process.env.MyPort;
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://easy-mart-ten.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/product", productRoutes);
app.use("/category", categoryRoutes);
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected!");
    app.listen(myPort, () => {
      console.log(`server is running on ${myPort}`);
    });
  })
  .catch(() => {
    console.log(" NOT Connected to DATABASE!");
  });
