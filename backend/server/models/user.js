const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
            trim:true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trime: true,
        },
        password:{
            type: String,
            required: true,
        },
        phone:{
            type:String,
            default:"",
        },
        profilePic:{
            type:String,
            default:"",
        },
        isVerified:{
            type:Boolean,
            default:false,
        },
        otp:{
            type: String,
            default: null,
        },
        otpExpiry:{
            type: Date,
            default: null,
        },
    },
    {timestamps: true}
);

const User=mongoose.model("User",userSchema);

module.exports=User;