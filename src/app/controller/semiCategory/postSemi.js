const express = require('express');
const router = express.Router();
let semi = require('../../model/schema/semiCategory');
//let category = require('../../model/schema/category');
const upload = require('../../../config/multer');
const pool = require('../../module/pool.js');

var multiUpload = upload.fields([{ name: 'img'}]);

router.post('/', multiUpload, async (req, res, next) => {

    let tempArray = [];

    
    for (let i = 0 ; i < req.files.img.length ; i++) {
       tempArray.push(req.files.img[i].location);
       console.log(i);
   }


    await semi.create({
        title : req.body.title,
        img_url : tempArray,
        category_idx : req.body.category_idx
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
});

module.exports = router;

