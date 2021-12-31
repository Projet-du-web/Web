const {model,Schema} = require("mongoose");

const RessourceSchema = new Schema({
    url:{
        type:String
    },
    title:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    Responsable:{
        type:String,
        required:true
    },
    Annomalies:{
        type:String,
        required:true
   },
    QRCODE:{
        type:String,
    },
}, 
    { timestamps:true }
);   

module.exports = model("Ressource",RessourceSchema);
