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

    cart.find({
        product_idx : product_idx
    },function (err,result){
        if(err){
            return res.status(500).send({
                message: "get product fail"
            });
        }else{
            if(result.length===0){
                product.find({
                    _id : product_idx
                }, function(err,products){
                    if(err){
                        return res.status(500).send({
                            message: "get product fail"
                        });
                    }else{
                        for (let i = 0; i < products.length; i++) {
                            name = products[i].name;
                            price = products[i].price;
                            img_url = products[i].img_url[0];

                            cart.create({
                                product_idx : product_idx,
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


            }else{
                cart.update({ product_idx: product_idx }, { $set: req.body }, function(err, output){
                    if(err) res.status(500).json({ error: 'database failure' });
                    if(!output.n) return res.status(404).json({ error: 'product not found' });
                    res.status(201).send({
                        message: "success"
                    });
                })
            }
        }

    });

});

module.exports = router;

