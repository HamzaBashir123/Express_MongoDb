import mongoose from "mongoose";
let uri = "mongodb+srv://hamzabashir1268:zytUHakaHKzJ0eaw@hamzabashir.stxhjnf.mongodb.net/HamzaBashir?retryWrites=true&w=majority";
const connectDB = ()=>{
    console.log('Connect Db')
    return mongoose.connect(uri,{
        useNewUrlParser :true,
        useUnifiedTopology:true,
    })
}

export default connectDB;

// zytUHakaHKzJ0eaw