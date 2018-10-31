const express = require('express');
const router = express.Router();

let purchase = require('../../model/schema/purchase');

router.get('/', function (req, res) {

    var data = new Array();

    purchase.find({}, async function (err, result) {
            if (err) {
                return res.status(405).send({
                    message: "database failure"
                    });
            } else {
                for (let i = 0; i < result.length; i++) {
                    
                    let temp = {
                        product_idx : "",
                        img_url : []
                    }
                    temp.product_idx = result[i].product_idx;
                    temp.img_url = result[i].img_url;
                    
                    data.push(temp);
                }
                res.status(200).send({
                    message: "success",
                    result : data
                });
            }
        }).sort({'create_at' : -1}).limit(5);

});

module.exports = router;