const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    topic: String,
    payload: String,
    timestamp: String
});

module.exports = mongoose.model("Message", messageSchema);