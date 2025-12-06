import mongoose from "mongoose"

const requestSchema = new mongoose.Schema({
    provider:{type: mongoose.Schema.Types.ObjectId, ref: "Provider"},
    client:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    status: {type:String,enum:["pending", "accepted", "decliend"]}
})

export default mongoose.model("Request",requestSchema)