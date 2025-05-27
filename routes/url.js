const express = require('express');
const { 
    handleTogenrateNewShortURL,
    handleToRedirectURL,
    handleGetAnalytics,
    } = require('../controllers/url');

const router = express.Router();

router.post('/' , handleTogenrateNewShortURL); 
router.get("/:shortid" , handleToRedirectURL);
router.get("/analytics/:shortid" , handleGetAnalytics);

module.exports = router;

 