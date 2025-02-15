import mongoose from "mongoose";

const Todoschema = new mongoose.Schema({
    task:{
        type:String  
    },
    status:{
        type: Boolean,
        default: false
    }
},{
    timestamps:true,
});


const Task = mongoose.model("todos", Todoschema);
export default Task;