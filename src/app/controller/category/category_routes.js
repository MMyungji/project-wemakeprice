const express = require('express');
const router = express.Router();

const postCategory = require('./postCategory');
router.use('/category', postCategory);

const getCategory = require('./getCategory');
router.use('/category', getCategory);

module.exports = router;
