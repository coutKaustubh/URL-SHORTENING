const express =  require('express');
const router = express.Router();
const {
    handleSignUp ,
    handleLoginUp,
    } = require('../controllers/user');

    router.post('/' , handleSignUp);
    router.post('/login' , handleLoginUp);


module.exports = router;