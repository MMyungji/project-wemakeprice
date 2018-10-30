const express = require('express');
const router = express.Router();

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
		    	res.status(201).send({
			       	message : "delete success"
			    });
		    }
	    }
    });
});



module.exports = router;