import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text:{type:String,required:true},
    likes:{type:Number,default: 0},
    author:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    post:{type:mongoose.Schema.Types.ObjectId,ref:"Post"},
    replies:{type:[String]},
})

export default mongoose.model("Comment",commentSchema)