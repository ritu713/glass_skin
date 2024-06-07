import mongoose from "mongoose";

const routineSchema = new mongoose.Schema({
    userID : {
        type : String,
        required : true
    },
    productType : {
        type : [String],
        required : true
    },
    timeOfUse : {
        type : String,
        required : true
    }
});

export default mongoose.model("routine", routineSchema)