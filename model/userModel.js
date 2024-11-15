const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("User", userSchema)