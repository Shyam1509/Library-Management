const express = require("express");
const { addBook } = require("../controllers/bookController");

const bookRoutes = express.Router();

// bookRoutes.post("/add-book", addBook);

module.exports = bookRoutes;