var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name : String,
    price : Number,
    img_url : Array,
    detail_url : Array,
    popularity : Number,
    category_idx : String,
    semiCategory_idx : String
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('product', productSchema);