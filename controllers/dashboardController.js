const Expense = require('../models/dashboardModel');
const path = require('path');

const addExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body;
        const expense = await Expense.create({ amount, description, category });
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getExpenses = async (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/dashboard.html'));
};

module.exports = {
    addExpense,
    getExpenses
};