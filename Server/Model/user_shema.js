const {model,Schema} = require("mongoose");
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String
    },
    ReportCreated: [{
        type: Schema.Types.ObjectId,
        ref: 'report'
    }],
}, 
    { timestamps:true }
);   

module.exports = model("user",userSchema);
