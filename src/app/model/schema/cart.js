var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var cartSchema = new Schema({
    product_name : String,
    product_img : String,
    product_price : Number

},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('cart', cartSchema);