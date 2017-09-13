const express = require('express'),
      router = express.Router(),
      mongoose = require('mongoose');

const secret = require('../config/secret');

//Connect to database
mongoose.connect(secret.db, {useMongoClient: true},(err) => {
    if(err){
        throw Error("Error: " + err);
    }else{
        console.log("Database is connected");
    }
});

//Error Handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
}

let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/dashboard',(req,res) => {
    
})

module.exports = router;