const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db-connection');

const Expense = sequelize.define('Expense', {
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Expense;