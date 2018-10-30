var express = require('express');
var router = express.Router();

const user = require('./controller/user/user_routes');
router.use('/', user);

const product = require('./controller/product/product_routes');
router.use('/', product);

const semi = require('./controller/semiCategory/semiCategory_routes');
router.use('/', semi);

const category = require('./controller/category/category_routes');
router.use('/', category);

const cart = require('./controller/cart/cart_routes');
router.use('/', cart);

const search = require('./controller/search/search_routes');
router.use('/', search);

module.exports = router;