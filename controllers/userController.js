const User = require("../model/userModel");

const addUser = async (req, res) => {
    try {
        const { id, name } = req.body;

        const result = await User.create({
            id: id,
            name: name
        });

        res.status(200).json({ user: result });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to create user" });
    }
}

module.exports = { addUser };
