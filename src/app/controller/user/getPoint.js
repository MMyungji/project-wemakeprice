const express = require('express');
const router = express.Router();

const db = require('../../module/pool.js');

router.get('/', async (req, res) => {
	const ID = 1;
	let readUser = 'select * from USER where user_idx = ?';

	let data = new Array();


	let user = await db.execute2(readUser, ID);
	console.log(user);

	//let updatePoint = 'update USER set ? where user_idx = ?';
	//let points = await db.execute3(readUser, point,ID);

    //console.log(result);

    let temp = {
    	user_name : "",
    	user_point : "",
    	user_rank : "",
    	purchase_amount : ""
    }

    temp.user_name = user[0].user_name;
    temp.user_point = user[0].user_point;
    temp.user_rank = user[0].user_rank;
    temp.user_name = user[0].user_name;

    data.push(temp);

    if (data) {
    	res.status(200).send({
    		message: "success",
    		data: data
    	});

    } else {
    	res.status(405).send({
    		error: "Get data fail"
    	});

    }
    


});

module.exports = router;