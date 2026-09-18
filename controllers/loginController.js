const User = require('../models/signUpModel');
const bcrypt = require('bcrypt');
const path = require('path');

//POST request for Login
const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({
            where: { email }
        });

        // User nahi mila
        if (!user) {
            return res.status(401).json({
                message: "Invalid email"
            });
        }

        // Password check
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        // Login successful
        return res.status(200).json({
            message: "Login successful"
        });



        res.status(200).json({ message: "Login successful" });

    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

//GET request
const getLogin = (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/loginForm.html'));
}

module.exports = {
    userLogin,
    getLogin
}