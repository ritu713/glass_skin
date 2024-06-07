import mongoose from "mongoose"

export const profileSchema = new mongoose.Schema({
    fName : {
        type : String,
        required : true
    },
    lName : {
        type : String,
        required : true
    },
    pfp : String,
    skinType : {
        type : String,
        required: true,
    },
    skinConcerns : [String]
})

