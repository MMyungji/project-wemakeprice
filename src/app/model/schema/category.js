var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    title : String,
    img_url : String,
    hash : String,
    content : String
},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('category', categorySchema);