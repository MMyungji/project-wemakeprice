var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartSchema = new Schema({
	product_idx : String,
    product_name : String,
    product_img : String,
    product_price : Number,
    product_count : Number,
    check : {type : Boolean, default : true},
    create_at : {type : Date, default : Date.now}

},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('cart', cartSchema);