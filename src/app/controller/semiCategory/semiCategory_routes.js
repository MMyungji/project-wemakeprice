const express = require('express');
const router = express.Router();

const postSemi = require('./postSemi');
router.use('/semi', postSemi);

//const getSemi = require('./getSemi');
//router.use('/semi', getSemi);

module.exports = router;
