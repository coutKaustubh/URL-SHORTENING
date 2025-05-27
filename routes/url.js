const express = require('express');
const { 
    handleTogenrateNewShortURL,
    handleToRedirectURL,
    
    } = require('../controllers/url');

const router = express.Router();

router.post('/' , handleTogenrateNewShortURL); 
router.get("/:shortid" , handleToRedirectURL);


module.exports = router;

 