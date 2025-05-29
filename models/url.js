const mongoose = require("mongoose");

//Schema

const urlSchema = new mongoose.Schema({
    ShortId :{
        type : String,
        required : true,
        unique : true,
    },
    UserEnteredURL: {
        type : String,
        required : true,
    },
    visitedHistory : [{timestamp : {type : Number}}],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"  
    }
    
},
  { timestamps : true}
);


const URL = mongoose.model("URL" , urlSchema)

module.exports = URL;