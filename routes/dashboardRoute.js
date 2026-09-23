const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', dashboardController.getDashboard);
router.post('/add', authMiddleware, dashboardController.addExpense);
router.get('/expense', authMiddleware, dashboardController.getExpensesByUserId);

module.exports = router;