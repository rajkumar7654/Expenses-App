const express = require('express');
const app = express();
const port = 3000;
//importing routes
const path = require('path');
const cors = require('cors');

const loginRoute = require('./routes/loginRoute');
const signUpRoute = require('./routes/signUpRoute');

//data base 
const sequelize = require('./utils/db-connection');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../Frontend')));

//SignUp routes
app.use('/user', signUpRoute);

//Login routes

app.use('/user', loginRoute);


sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.error('Unable to connect to the database:', error);
});