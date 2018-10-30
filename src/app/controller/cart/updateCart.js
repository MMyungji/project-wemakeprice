const express = require('express');
const router = express.Router();

let cart = require('../../model/schema/cart');

router.put('/:cart_idx', async (req, res, next) =>{
	cart.update({_id: req.params.cart_idx},{$set: req.body},function(err,output){
		if(err) res.status(500).json({ error: 'database failure' });
            if(!output.n) return res.status(404).json({ error: 'cart not found' });
            res.json( { message: 'success' } );
	})
});

module.exports = router;