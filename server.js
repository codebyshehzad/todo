import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import todoRouter from "./router/todo.router.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.use("/api/todo", todoRouter);

app.listen(port,()=>{
    console.log("Server started at " + port);
})