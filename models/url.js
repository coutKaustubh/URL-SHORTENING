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
    
},
  { timestamps : true}
);


const URL = mongoose.model("URL" , urlSchema)

module.exports = URL;