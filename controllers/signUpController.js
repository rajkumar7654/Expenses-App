const User = require('../models/signUpModel');
const path = require('path');

//POST request
const userSignUp = async (req, res) => {
    try {
        console.log("Request body:", req.body);

        const { name, email, password } = req.body;

        //Email Checking
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const user = await User.create({ name, email, password });
        console.log("User created:", user);
        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
};

//GET request
const getUserSignUp = (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../Frontend/signUpForm.html")
    );
};



module.exports = {userSignUp, getUserSignUp};