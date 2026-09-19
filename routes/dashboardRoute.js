const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/', dashboardController.getDashboard);
router.post('/add', dashboardController.addExpense);
router.get('/expense/:userId', dashboardController.getExpensesByUserId);

module.exports = router;