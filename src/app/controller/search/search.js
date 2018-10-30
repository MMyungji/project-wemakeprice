const express = require('express');
const router = express.Router();
let product = require('../../model/schema/product');
let productSearchRes = require('../../model/res/productSearchRes');

//검색
//keyword=검색어
router.get('/', async (req, res, next) => {

    const keyword = req.query.keyword;


    let query = {
        $or: []
    };
    if (keyword != undefined && keyword != '') {


       
        
        query.$or.push({
            name: keyword
        });
    }

    product.find(query, async function (err, result) {
        if (err) {
            return res.status(405).send({
                message: "get product fail"
            });
        } else {
            return res.status(200).send({
                message: "success",
                result: productSearchRes.res(result)
            });
        }
    }).sort({
        _id: -1
    }).limit(10);

});

module.exports = router;