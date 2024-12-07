const Book = require("../model/bookModel");

const addBook = async (req, res) => {
    try {
        const { id, name, category, rent } = req.body;

        const result = await Book.create({
            id: id,
            name: name,
            category: category,
            rent: rent
        });

        res.status(200).json({ book: result });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to add book" });
    }
}

const searchBook = async (req, res) => {
    const { q } = req.query

    try {
        
        const books = await Book.find({

            name: ({ $regex: q, $options: "i"})
        })
        res.status(200).json(books)
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = { addBook, searchBook };
