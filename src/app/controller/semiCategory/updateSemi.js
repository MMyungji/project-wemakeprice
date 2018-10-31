const express = require('express');
const router = express.Router();
const upload = require('../../../config/multer');
let semi = require('../../model/schema/semiCategory');

var multiUpload = upload.fields([{ name: 'img'}]);

router.put('/:semi_idx', multiUpload, async (req, res, next) =>{
	let tempArray = [];

	if (req.files.img){
		for (let i = 0 ; i < req.files.img.length ; i++) {
			tempArray.push(req.files.img[i].location);
		}

		semi.update({_id: req.params.semi_idx},{$set: req.body, img_url: tempArray },function(err,output){
			if(err) res.status(500).json({ error: 'database failure' });
			if(!output.n) return res.status(404).json({ error: 'semi not found' });
			res.json( { message: 'success' } );
		})
	}else{
		res.status(405).send({
			error: 'please put an image file'
		}); 
	}

	
});

module.exports = router;