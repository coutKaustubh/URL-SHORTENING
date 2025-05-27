const mongoose = require('mongoose');

async function connectionToDb(url) {
    return mongoose.connect(url);
}

module.exports ={
    connectionToDb,
}