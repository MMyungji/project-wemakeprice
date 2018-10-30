const express = require('express');
const router = express.Router();

let product = require('../../model/schema/product');
let cart = require('../../model/schema/cart');

router.get('/', function (req, res) {
	var data = new Array();

	cart.find(async function (err, result) {
		if (err) {
			return res.status(500).send({
				message: "get cart fail"
			});
		} else {
			for (let i = 0; i < result.length; i++) {

				let temp = {
					product_idx : "",
					product_name : "",
					product_img : [],
					product_price : "",
					product_count : ""
				}
				temp.product_idx = result[i].product_idx;
				temp.product_name = result[i].product_name;
				temp.product_img = result[i].product_img;
				temp.product_price = result[i].product_price;
				temp.product_count = result[i].product_count;
				
				data.push(temp);
			}
			res.status(200).send({
				message: "success",
				result : data
			});
		}


	}).sort({'create_at' : -1});

}); //get

module.exports = router;