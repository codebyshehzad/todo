import mongoose from "mongoose";
import Task from "../models/todo.model.js";


export const getTodo = async(req, res)=>{
    try {
        const todo = await Task.find({});
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        console.log("error in fetching products", message.error);
        res.status(500).json({ success: false, message: "server error" });
      }
};

export const createTodo = async(req,res)=> {
    const todo = req.body;
try{
    const task = await Task.create(todo);
    res.status(200).json({ success: true, data: task });
}
catch(error){
    console.log("Error in creating task", error.message);
    res.status(500).json({ success: false, message: "Server error" });
}

};  

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const todo = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid task Id" });
    }
    try {
      const updateProduct = await Task.findByIdAndUpdate(id, todo, {
        new: true,
      });
      res.status(200).json({ success: true, data: updateTodo });
    } catch (error) {
      res.status(500).json({ success: false, message: "server error" });
    }
  };

  export const updateTaskStatus = async (req, res) => {
    const { id } = req.params;  
    const { status } = req.body; 
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { status },
            { new: true } 
          
        );
        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
        console.error("Error updating task status", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
};


export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid task Id" });
    }
    try {
      await Task.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Task deleted." });
    } catch (error) {
      console.log("error in deleting tasks", error.message);
      res.status(500).json({ success: false, message: "Server Error" });
    }
};