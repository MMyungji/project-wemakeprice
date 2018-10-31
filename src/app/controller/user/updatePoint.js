const express = require('express');
const router = express.Router();

const db = require('../../module/pool.js');

router.put('/', multiUpload, async(req, res, next) => {

	let updatePoint = 'update User set ? where user_idx = ?';
	let points = await db.execute3(updatePoint, point,1);

	if (points.length === 0)
            res.status(403).send({
                message: 'profile does not exist'
            });
        else{
        	let data = {
        		position : req.body.position ? req.body.position : profile[0].position,
        		introduce : req.body.introduce ? req.body.introduce : profile[0].introduce,
        		portfolio_url : req.body.portfolio_url ? req.body.portfolio_url : profile[0].portfolio_url,
        		aim : req.body.aim ? req.body.aim : profile[0].aim,
        		department : req.body.department ? req.body.department : profile[0].department,
                area : req.body.area ? req.body.area : profile[0].area,
                profile_url : req.files.profile_img ? req.files.profile_img[0].location : profile[0].profile_url,
                background_url : req.files.background_img ? req.files.background_img[0].location : profile[0].background_url,
            };
            let result = await db.execute3(updateProfile, data, ID);
            //console.log(result);
            if(result){
                res.status(200).send({
                    message: 'update success'
                });
            }else{
                res.status(405).send({
                    message: 'fail'
                }); 
            }
        }



});

module.exports = router;