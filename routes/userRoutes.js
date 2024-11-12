const express = require("express");
const { addUser } = require("../controllers/userController");

const userRoutes = express.Router();

userRoutes.post("/add-user", addUser);

module.exports = userRoutes;