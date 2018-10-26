const express = require('express');
const router = express.Router();
let category = require('../../model/schema/category');
const upload = require('../../../config/multer');
const pool = require('../../module/pool.js');

var multiUpload = upload.fields([{ name: 'img'}]);

router.post('/', multiUpload, async (req, res, next) => {

    let tempArray = [];

    
    for (let i = 0 ; i < req.files.img.length ; i++) {
       tempArray.push(req.files.img[i].location);
       console.log(i);
   }


    await category.create({
        title : req.body.title,
        img_url : tempArray,
        hash : req.body.hash,
        content : req.body.content
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

