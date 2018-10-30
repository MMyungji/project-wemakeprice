const express = require('express');
const router = express.Router();
const db = require('../../module/pool.js');
let product = require('../../model/schema/product');

router.get('/:product_idx', function (req, res) {

    let product_idx = req.params.product_idx;

    var data = new Array();

    product.find({
            _id: product_idx
        },

        async function (err, result) {
            if (err) {
                return res.status(500).send({
                    message: "get product fail"
                });
            } else {
                for (let i = 0; i < result.length; i++) {
                    
                    let temp = {
                        product_idx : "",
                        name : "",
                        price : "",
                        img_url : [],
                        detail_url : [],
                    }
                    temp.product_idx = result[i]._id;
                    temp.name = result[i].name;
                    temp.price = result[i].price;
                    temp.img_url = result[i].img_url[0];
                    temp.detail_url = result[i].detail_url[0];
                    
                    data.push(temp);
                }
                res.status(200).send({
                    message: "success",
                    result : data
                });
            }
        });

});

module.exports = router;