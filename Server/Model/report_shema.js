const {model,Schema} = require("mongoose");
const userSchema = new Schema({
    reporttitle:{
        type:String,
        required:true
    },
    reportlocation:{
        type:String,
        required:true
    },
    reportdescription:{
        type:String,
        required:true
    },
    reportimage:{
             type:String,
             required:false
    },
    state:{
        type:Boolean,
        required:false
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
}, 
    { timestamps:true }
);   

module.exports = model("report",userSchema);
