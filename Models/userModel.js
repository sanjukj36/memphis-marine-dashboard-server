const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    f_sno: {
        type: String,
        required: false, // Make f_sno optional
    },
    f_userName: {
        type: String,
        required: true,
        unique: true
    },
    f_Pwd: {
        type: String,
        required: true
    },
    userType: { 
        type: String,
        enum: ['admin', 'user'],
        default: 'user' 
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
