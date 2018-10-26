const express = require('express');
const router = express.Router();
const db = require('../../module/pool.js');

let semi = require('../../model/schema/semiCategory');
let product = require('../../model/schema/product');

router.get('/:semi_idx', function (req, res) {

	let semi_idx = req.params.semi_idx;

	var data = new Array();

	semi.find({
		_id : semi_idx
	}, async function (err, result) {
		if (err) {
			return res.status(405).send({
				message: "get semiCategory fail"
			});
		} else {
			product.find({
				semiCategory_idx : semi_idx
			},function (err,obj) {
				if (err) {
					res.status(405).send({
						message: "product database failure"
					});
				} else {

					for (let i = 0; i < obj.length; i++) {
						let temp = {
							product_idx : "",
							product_name : "",
							product_price : "",
							product_img_url : []
						}
						temp.product_idx = obj[i]._id;
						temp.product_name = obj[i].name;
						temp.product_price = obj[i].price
						temp.product_img_url = obj[i].img_url[0];

						data.push(temp);
					}

				
			}
			res.status(200).send({
				message: "success",
				result : data
			});

		}).sort({'_id' : -1}); // semi
		}


	});//find(cate)

}); //get

module.exports = router;