const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	image: String,
	title: String,
	price: Number,
	quantity: { type: Number, default: 0 }
},{timestamps:true})

const ItemModel = mongoose.model('Item',itemSchema)

module.exports = ItemModel 