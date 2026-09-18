const User = require('../models/signUpModel');
const path = require('path');

//POST request for Login
const userLogin = async (req, res) => {
    try{
        const {email, password} = req.body;

        //Check email and password are matching
        const user = await User.findOne({ where: { email } });

        if(!user){
            return res.status(400).json({ message: "Invalid email" });
        }
        if(user.password !== password){
            return res.status(400).json({ message: "Invalid password" });
        }

        res.status(200).json({ message: "Login successful" });
        
    }catch(error){
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