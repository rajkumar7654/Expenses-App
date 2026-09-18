const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.getExpenses);
router.post('/add', dashboardController.addExpense);

module.exports = router;