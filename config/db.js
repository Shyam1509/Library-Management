const mongoose = require("mongoose");

const mongoURL = process.env.MONGOURL

const dbConnection = () => {
    mongoose.connect(mongoURL)
    .then(()=> {
        console.log("connected to database");
        
    }).catch((err)=> {
        console.log(err);
        
    })
}

module.exports = dbConnection;