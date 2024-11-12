const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({

    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    rent:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Book", bookSchema)