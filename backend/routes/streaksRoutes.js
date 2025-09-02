const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const streaksController = require('../controllers/streaksController');

router.get('/', authenticate, streaksController.getStreaks);

router.post('/update', authenticate, streaksController.updateStreaks);

module.exports = router;
