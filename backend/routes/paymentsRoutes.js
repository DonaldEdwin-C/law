const express = require('express');
const router = express.Router();
const { getPayments, addPayments } = require('../controllers/paymentsController');
const authenticate = require('../middleware/authenticate');

router.get('/', authenticate, getPayments);
router.post('/', authenticate, addPayments);

module.exports = router;