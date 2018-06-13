const mongoose = require('mongoose');
const Schema = mongoose.Schema;


cartSchema = new Schema({
	image: String,
	title: String,
	price: Number,
	quantity: { type: Number, default: 0 }
},{timestamps:true})

const CartModel = mongoose.model("Cart", cartSchema)

module.exports = CartModel