const express = require('express');
const router = express.Router();

const postCart = require('./postCart');
router.use('/cart', postCart);

const getCart = require('./getCart');
router.use('/cart', getCart);

const deleteCart = require('./deleteCart');
router.use('/cart', deleteCart);

module.exports = router;
