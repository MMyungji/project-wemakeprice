const express = require('express');
const router = express.Router();

let product = require('../../model/schema/product');
let cart = require('../../model/schema/cart');
const upload = require('../../../config/multer');
const pool = require('../../module/pool.js');

router.post('/', async (req, res, next) => {

    product_idx = req.body.product_idx;
    name = "";
    price = "";
    img_url = [];

    console.log(product_idx);

    
    product.find({
        _id : product_idx
    }, function(err,result){
        if(err){
            return res.status(500).send({
                message: "get product fail"
            });
        }else{
            for (let i = 0; i < result.length; i++) {
                name = result[i].name;
                price = result[i].price;
                img_url = result[i].img_url[0];



                cart.create({
                    product_idx : req.body.product_idx,
                    product_name : name,
                    product_price : price,
                    product_img : img_url,
                    product_count : req.body.count
                }, function(err,carts){
                    if (err) {
                        res.status(405).send({
                            message: "fail"
                        });
            //return;
        }else{
            res.status(201).send({
                message: "success"
            }); 
        } 

    }) 

                
            }
        }
    })

    
    
});

module.exports = router;

