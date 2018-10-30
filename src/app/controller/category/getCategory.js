const express = require('express');
const router = express.Router();

let category = require('../../model/schema/category');
let semi = require('../../model/schema/semiCategory');

router.get('/:category_idx', function (req, res) {

	let category_idx = req.params.category_idx;

	var data = new Array();
	var data2 = new Array();

	category.find({
		_id : category_idx
	}, async function (err, result) {
		if (err) {
			return res.status(500).send({
				message: "get category fail"
			});
		} else {
			for (let i = 0; i < result.length; i++) {

				let temp = {
					title : "",
					img_url : [],
					hash : "",
					content : ""
				}
				temp.title = result[i].title;
				temp.img_url = result[i].img_url[0];
				temp.hash = result[i].hash;
				temp.content = result[i].content;

				data.push(temp);
			}


			semi.find({
				category_idx : category_idx
			},function (err,obj) {
				if (err) {
					res.status(405).send({
						message: "database failure"
					});
				} else {

					for (let i = 0; i < obj.length; i++) {
						let temp = {
							semiCategory_idx : "",
							semi_title : "",
							semi_img_url : []
						}
						temp.semiCategory_idx = obj[i]._id;
						temp.semi_title = obj[i].title;
						temp.semi_img_url = obj[i].img_url;

						data2.push(temp);
					}

					/*res.status(200).send({*/
						/*						message: "success",*/
						/*						result : data,*/
						/*						semi_result : data2*/
						/**/
						/*					});*/
			}//
			res.status(200).send({
				message: "success",
				result : data,
				semi_result : data2
			});

		}).sort({'title' : -1}); // semi
		}


	});//find(cate)

}); //get

module.exports = router;