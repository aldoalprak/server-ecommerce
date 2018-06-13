var ItemModel = require('../models/item.js')


class Item {

	static create(req,res) {
		var dataItem = {
			image:req.body.image,
			title:req.body.title,
			price:req.body.price,
			quantity:req.body.quantity
		}
		ItemModel.create(dataItem)
		.then(dataItem=>{
			res.status(200).json({message:"user created", dataItem})
		})
		.catch(err=>{
			res.status(500).json({message:err.message})
		})
	}

	static show(req,res) {
		ItemModel.find()
		.then(dataItems=>{
			res.status(200).send(dataItems)
		})
		.catch(err=>{
			res.status(500).json({message:err.message})
		})
	}

	static update(req,res) {
		
	}

}

module.exports = Item


