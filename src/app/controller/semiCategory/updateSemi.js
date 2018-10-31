const express = require('express');
const router = express.Router();
const db = require('../../module/pool.js');

let semi = require('../../model/schema/semiCategory');


router.put('/:cart_idx', async (req, res, next) =>{
	semi.update({_id: req.params.semi_idx},{$set: req.body},function(err,output){
		if(err) res.status(500).json({ error: 'database failure' });
            if(!output.n) return res.status(404).json({ error: 'semi not found' });
            res.json( { message: 'success' } );
	})
});

module.exports = router;