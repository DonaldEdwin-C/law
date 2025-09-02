const express = require('express');
const router = express.Router();
const { getMilestones, addMilestones } = require('../controllers/milestonesController');
const authenticate = require('../middleware/authenticate');

router.get('/:goalId', authenticate, getMilestones);
router.post('/:goalId', authenticate, addMilestones);

module.exports = router;
