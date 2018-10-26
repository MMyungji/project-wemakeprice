var express = require('express');
var router = express.Router();

const product = require('./controller/product/product_routes');
router.use('/', product);

const semi = require('./controller/semiCategory/semiCategory_routes');
router.use('/', semi);

const category = require('./controller/category/category_routes');
router.use('/', category);

module.exports = router;