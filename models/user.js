import mongoose  from "mongoose";
const userSchema  = new mongoose.Schema({
    name:{
        type: String,
        require:true,
        unique:false,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
}) 


export default mongoose.model('User', userSchema);