const express = require('express');
const router = express.Router();
const { getGoals, addGoals } = require('../controllers/goalsController');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, getGoals);
router.post('/', authenticate, addGoals);

module.exports = router;
