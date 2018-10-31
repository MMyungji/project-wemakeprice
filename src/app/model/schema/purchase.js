var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var purchaseSchema = new Schema({
	product_idx : String,
	img_url : Array,
    create_at : {type : Date, default : Date.now}

},{
    versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('purchase', purchaseSchema);