import express from "express";
import { createTodo, getTodo, deleteTodo, updateTodo, updateTaskStatus } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/",getTodo)
router.post("/",createTodo );
router.put("/:id",updateTodo );
router.patch("/:id/status",updateTaskStatus );
router.delete("/:id",deleteTodo );

export default router;
