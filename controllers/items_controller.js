var ItemModel = require('../models/item.js')


class Item {

	static upload(req,res) {
		var dataItem = {
			image:req.file.cloudStoragePublicUrl,
			title:req.body.title,
			price:req.body.price
		}
		ItemModel.create(dataItem)
		.then(dataItem=>{
			res.status(200).json({message:"item created", dataItem})
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




}

module.exports = Item


