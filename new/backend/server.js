import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/myapp");

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) =>{
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
});
app.get("/", (req, res) => {
  res.send("Server is ready");
});
//app.use((err, req, res,next) =>{
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = 5001;
//const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
