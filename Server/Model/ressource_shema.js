const {model,Schema} = require("mongoose");

const RessourceSchema = new Schema({
    url:{
        type:String,
        required:false
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
    Annomalies:[{
         type: String,
         required : true
    }],
    Responsable: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
}, 
    { timestamps:true }
);   

module.exports = model("Ressource",RessourceSchema);
