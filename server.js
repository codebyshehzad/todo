import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import {connectDB} from "./config/db.js";
import todoRouter from "./router/todo.router.js"
import userRouter from "./router/user.router.js"

dotenv.config();

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use("/user", userRouter);
app.use("/api/todo", todoRouter);

app.listen(port,()=>{
    console.log("Server started at " + port);
})

