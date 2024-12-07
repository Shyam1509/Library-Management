const express = require("express");
const { addBook, searchBook } = require("../controllers/bookController");

const bookRoutes = express.Router();

bookRoutes.post("/add-book", addBook);
bookRoutes.get("/search", searchBook);

module.exports = bookRoutes;