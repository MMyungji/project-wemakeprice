const express = require('express');
const router = express.Router();

let cart = require('../../model/schema/cart');
let purchase = require('../../model/schema/purchase');
const upload = require('../../../config/multer');

router.post('/', async (req, res, next) => {

  const item_to_buy = req.body.cart_idx;
  var success = false;


  if (typeof(item_to_buy)=='object'){
    for (let i = 0 ; i < item_to_buy.length ; i++) {
      await cart.find({
        _id : item_to_buy[i]
      }, function(err,result){
        if(err){
          return res.status(500).send({
            message: "get product fail"
          });
        }else{

          for (let j = 0; j < result.length; j++) {
            product_idx = result[j].product_idx;
            img_url = result[j].product_img;

            purchase.create({
              product_idx : product_idx,
              img_url : img_url
            }, function(err,purchases){
              if (err) {
                success = false;
                

            //return;
          }else{
            success = true;
          } 
           }) //purchase_create 
          } //for_j
        } //else
      }) //cart_find

      
    } //for

    if(success) {
      res.status(200).send({
        message: 'purchase successful'
      });
    }else{
      res.status(400).send({
        error : "fail"
      });

    }


  }else if(typeof(item_to_buy)=='string'){
    await cart.find({
      _id : item_to_buy
    }, function(err,result){
      if(err){
        return res.status(500).send({
          message: "get product fail"
        });
      }else{

        for (let j = 0; j < result.length; j++) {
          product_idx = result[j].product_idx;
          img_url = result[j].product_img;

          purchase.create({
            product_idx : product_idx,
            img_url : img_url
          }, function(err,purchases){
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
           }) //purchase_create 
          } //for_j
        } //else
      }) //cart_find



  }
  else{
    res.status(405).send({
      message: "please upload cart_idx"
    });
  }

});

module.exports = router;

