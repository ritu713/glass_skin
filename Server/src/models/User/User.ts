import mongoose from 'mongoose'
import { profileSchema } from './UserRelatedSchema'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    emailID : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    createdAt : Date,
    profile : {
        type : profileSchema, 
        required : true
    }
})

userSchema.pre("save", async function (next : any) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
})

export default mongoose.model("User", userSchema);