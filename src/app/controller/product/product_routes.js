const express = require('express');
const router = express.Router();

const postProduct = require('./postProduct');
router.use('/product', postProduct);

const getProduct = require('./getProduct');
router.use('/product', getProduct);

module.exports = router;
