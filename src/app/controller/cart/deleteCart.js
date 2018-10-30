const express = require('express');
const router = express.Router();
const db = require('../../module/pool.js');
let cart = require('../../model/schema/cart');


router.delete('/:cart_idx', function(req, res){
	cart.remove({_id: req.params.cart_idx}, function(err, output){
		if(err){
			res.status(405).json({ error: "database failure" });
		}else{
			if(output.n === 0){
				res.status(400).send({
					error : "Bad Request"
				});
			} else{
				res.status(200).send({
					message : "delete success"
				});
			}
		}
	});
});


router.delete('/',async (req, res, next) => {
	let updatePoint = 'update USER set ? where user_idx = ?';
	let readUser = 'select * from USER where user_idx = ?';
	const item_to_buy = req.body.cart_idx;
	
	if (typeof(item_to_buy)=='object'){
		for (let i = 0 ; i < item_to_buy.length ; i++) {
			
			cart.deleteOne({_id:item_to_buy[i]}, function(err,output){
				if(err){
					res.status(405).send({ error: "database failure" });
				}else{
					if(output.n === 0){
						res.status(400).send({
							error : "Bad Request"
						});
					} else{
						
						res.status(200).send({
							message: 'payment successful'
						});

					}
				}
		});
		}

		
	}else if(typeof(item_to_buy)=='string'){
		cart.deleteOne({_id:item_to_buy}, function(err,output){
			if(err){
				res.status(405).send({ error: "database failure" });
			}else{
				if(output.n === 0){
					res.status(400).send({
						error : "Bad Request"
					});
				} else{

					res.status(200).send({
						message: 'payment successful'
					});

				}
			}
	});

	}
	else{
		res.status(405).send({
			message: "please upload cart_idx"
		});
	}

	
});

router.delete('/all', function(req, res){
	cart.remove({}, function(err, output){
		if(err){
			res.status(405).json({ error: "database failure" });
		}else{
			if(output.n === 0){
				res.status(400).send({
					error : "Bad Request"
				});
			} else{
				res.status(200).send({
					message : "delete success"
				});
			}
		}
	});
});
module.exports = router;