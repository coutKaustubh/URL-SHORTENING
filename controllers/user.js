const express = require('express');
const User = require('../models/user');
const route = require('../routes/user');
const {v4 : uuidv4  }  =require('uuid')
const {setUser} = require('../service/auth')

async function handleSignUp(req, res) {
    try {
        const { name, email, password } = req.body;
        console.log("SIGNUP REQUEST RECEIVED:", req.body);

        const user = await User.create({ name, email, password });

        const sessionID = uuidv4();              // Create a unique session ID
        setUser(sessionID, user);                // Map the session ID to the user
        res.cookie("uid", sessionID);            // Set cookie with that session ID

        return res.redirect('/login');
    } catch (err) {
        console.error("Error during signup:", err);
        return res.status(500).send("Something went wrong.");
    }
}

async function handleLoginUp(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email,password})
        if(!user) return res.render('login' , {
            error : "Invalid Email or Password"
        })
       const sessionID = uuidv4(); 
       setUser(sessionID,user);
       res.cookie("uid" , sessionID)  //sessionID ki cookie bna li isi cookie ko send krenege apan
       return res.redirect('/');
    } catch (err) {
        console.error("Error during signup:", err);
        return res.status(500).send("Something went wrong.");
    }
}


module.exports = {
    handleSignUp,
    handleLoginUp,
}