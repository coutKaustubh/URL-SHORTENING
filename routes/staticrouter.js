//These files are same as url.js , but frontened is doen here to kee p the files separated


const express = require('express');
const URL = require('../models/url')
const router = express.Router() ;

router.get("/" , async(req,res)=>{
    const allURLs = await URL.find({})
    return res.render("home" ,{
        urls : allURLs,
    }); //this is home.ejs (iski locations start me hi index me de di jaaati h)
})

module.exports = router;

 