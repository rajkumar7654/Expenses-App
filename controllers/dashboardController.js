const Expense = require('../models/dashboardModel');
const path = require('path');

const addExpense = async (req, res) => {
    try {
        const { amount, description, category } = req.body;

        console.log("Received expense data:", {
            amount,
            description,
            category,
            userId: req.userId
        });

        const expense = await Expense.create({
            amount,
            description,
            category,
            UserId: req.userId
        });

        console.log("Expense created:", expense);

        res.status(201).json(expense);

    } catch (error) {
        console.error("Error creating expense:", error);

        res.status(500).json({
            message: error.message
        });
    }
};

const getDashboard = async (req, res) => {
    res.sendFile(path.join(__dirname, '../../Frontend/dashboard.html'));
};

const getExpensesByUserId = async (req, res) => {
    try {
        console.log("Logged-in user ID:", req.userId);

        const expenses = await Expense.findAll({
            where: {
                UserId: req.userId
            }
        });

        console.log("Expenses found:", expenses);

        res.status(200).json(expenses);

    } catch (error) {
        console.error("Error fetching expenses:", error);

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    addExpense,
    getDashboard,
    getExpensesByUserId
};