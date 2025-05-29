//These files are same as url.js , but frontened is doen here to kee p the files separated


const express = require('express');
const URL = require('../models/url')
const router = express.Router() ;

router.get("/" , async(req,res)=>{
    if(!req.user) return res.redirect('/login');

    const allURLs = await URL.find({createdBy : req.user._id})
    return res.render("home" ,{
        urls : allURLs,
    }); //this is home.ejs (iski locations start me hi index me de di jaaati h)
})
router.get("/signup" , (req,res)=>{
    return res.render("signup");
})
router.get("/login" , (req,res)=>{
    return res.render("login");
})

module.exports = router;

  