const express = require('express');
const router = express.Router();

const postPurchase = require('./postPurchase');
router.use('/purchase', postPurchase);

const getPurchase = require('./getPurchase');
router.use('/purchase', getPurchase);

module.exports = router;
