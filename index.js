const express = require('express');
const {connectionToDb} = require('./connection');
const urlRoute = require("./routes/url")
const path = require('path') //for server side rendering
const staticRoute = require("./routes/staticrouter");
const PORT = 8001;
const app = express();

//Connection
connectionToDb("mongodb://127.0.0.1:27017/short-url")
.then(()=> console.log("Connection Successful"))
.catch((err) => console.log("Some error has been occurred : ", err));

//For server side rendering lets set view engine
app.set("view engine" , "ejs");

//telling where is my file
app.set("views" , path.resolve('./views'));

//middleware to parse data
app.use(express.json());
//middleware to parse form data
app.use(express.urlencoded({extended : false}));

//This line tells your Express app to serve static files (like CSS, images, JS files) from a folder named public.
app.use(express.static(path.resolve(__dirname, 'public')));


app.use("/url" , urlRoute);
app.use("/" , staticRoute);
    
app.listen(PORT , ()=> console.log(`SUCCESSFULLY Server started at PORT : ${PORT}`));


