const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const dbConnection = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");

const port = process.env.PORT

const app = express();

app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use("/user", userRoutes)
app.use("/book", bookRoutes)


app.listen(port, ()=>{
    console.log(`server is listing on port ${port}`);
    dbConnection()    
})