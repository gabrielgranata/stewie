let express = require('express');
let router = express.Router();

let Message = require('../db/message');

router.get('/', function( req, res) {

    Message.find({}, function(err, allMessages) {
        if (err) {
            console.log(err);
        } else {
            console.log(allMessages)
        }
    })
})