const mongoose = require("mongoose");

const newMessage = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Message = new mongoose.model("Message", newMessage);

module.exports = Message;
