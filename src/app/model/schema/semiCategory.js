var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var semiCategorySchema = new Schema({
    title : String,
    img_url : Array,
    category_idx : Number 
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('semiCategory', semiCategorySchema);