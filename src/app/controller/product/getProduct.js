const express = require('express');
const router = express.Router();
const db = require('../../module/pool.js');
let product = require('../../model/schema/product');

router.get('/:product_id', function (req, res) {

    let product_idx = req.params.product_id;

    var data = new Array();

    project.find({
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
                        name : "",
                        price : "",
                        img_url : [],
                        detail_url : [],
                    }
                    temp.name = result[0].name;
                    temp.price = result[0].price;
                    temp.img_url = result[0].img_url;
                    temp.detail_url = result[0].detail_url;
                    
                    data.push(temp);
                }
            }
        });

});

module.exports = router;