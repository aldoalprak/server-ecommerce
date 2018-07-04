var ItemModel = require('../models/item.js')
var UserModel = require('../models/user.js')
const jwt = require('jsonwebtoken')

class Item {

	static upload(req,res) {
		const decoded = jwt.verify(req.headers.token,process.env.JWT_SALT)
		var dataItem = {
			image:req.file.cloudStoragePublicUrl,
			title:req.body.title,
			price:req.body.price
		}
		UserModel.findById({_id:decoded.userId})
		.then(dataUser=>{
			if(dataUser) {
				ItemModel.create(dataItem)
				.then(dataItem=>{
					res.status(200).json({message:"item created", dataItem})
				})
				.catch(err=>{
					res.status(500).json({message:err.message})
				})
			}else{
				res.status(500).json({message:"you dont have authorize to upload"})
			}
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


