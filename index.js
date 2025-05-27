const express = require('express');
const {connectionToDb} = require('./connection');
const urlRoute = require("./routes/url")
const PORT = 8001;
const app = express();

//Connection
connectionToDb("mongodb://127.0.0.1:27017/short-url")
.then(()=> console.log("Connection Successful"))
.catch((err) => console.log("Some error has been occurred : ", err));

//middleware to parse data
app.use(express.json());


app.use("/url" , urlRoute);

    
 app.listen(PORT , ()=> console.log(`SUCCESSFULLY Server started at PORT : ${PORT}`));


