const Expense = require('../models/dashboardModel');
const path = require('path');

const addExpense = async (req, res) => {
    try {
        const { amount, description, category, userId } = req.body;
        console.log("Received expense data:", { amount, description, category, userId });

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const expense = await Expense.create({ amount, description, category, UserId: userId });
        console.log("Expense created:", expense);
        res.status(201).json(expense);
    } catch (error) {
        console.error("Error creating expense:", error);
        res.status(500).json({ message: error.message });
    }
};

const getDashboard = async (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/dashboard.html'));
};

const getExpensesByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        console.log("Received user ID:", userId);

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const expenses = await Expense.findAll({ where: { UserId: userId } });
        console.log("Expenses found:", expenses);
        res.status(200).json(expenses);
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addExpense,
    getDashboard,
    getExpensesByUserId
};