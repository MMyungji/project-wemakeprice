const express = require('express');
const router = express.Router();
let product = require('../../model/schema/product');
const upload = require('../../../config/multer');
const pool = require('../../module/pool.js');


var multiUpload = upload.fields([{ 
    name: 'img'
}, {
    name: 'detail_img'
}]);

router.post('/', multiUpload, async (req, res, next) => {

    let tempArray = [];
    let tempArray2 = [];

    if (req.files.img){
       for (let i = 0 ; i < req.files.img.length ; i++) {
          tempArray.push(req.files.img[i].location);
      }

      if (req.files.detail_img){
       for (let i = 0 ; i < req.files.detail_img.length ; i++) {
          tempArray2.push(req.files.detail_img[i].location);
      }
      await product.create({
        name : req.body.name,
        price : req.body.price,
        img_url : tempArray,
        detail_url : tempArray2,
        category_idx : req.body.category_idx,
        semiCategory_idx : req.body.semiCategory_idx
    }, async function (err, products) {
        if (err) {
            res.status(405).send({
                message: "fail"
            });
            return;
        }else{
            res.status(202).send({
                message: "success"
            });
        }

    });
  }else{
    res.status(405).send({
        message: "please upload detail image"
    });
}



  }else{
    res.status(405).send({
        message: "please upload image"
    });
}
});

module.exports = router;

