const mongoose= require('mongoose');

const connectDB=async()=>{
 try{
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
 }
 catch(e){
    console.error(`Error:${e.message}`);
    process.exit();
 }
};
module.exports=connectDB;
