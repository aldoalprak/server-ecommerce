const CartModel = require('../models/cart.js')


class Cart {

	static add(req,res) {
		
		var newCart = {
			image:req.body.image,
			title:req.body.title,
			price:req.body.price,
			quantity:req.body.quantity
		}


		CartModel.findOne({
			title:req.body.title
		})
		.then(dataCart=>{
		
			if(!dataCart) {
				CartModel.create(newCart)
				.then(newCart=>{
					res.status(200).json({message:"book created", newCart})
				})
				.catch(err=>{
					res.status(500).json({message:err.message})
				})
			}else{
				console.log(dataCart)
				CartModel.update(dataCart,{
					$set:{
						quantity: req.body.quantity
					}
				})
				.then(response=>{
					res.status(200).json({message:"quantity updated",response})
				})
				.catch(err=>{
					
					res.status(500).json({message:err.message})
				})
			}
		})
		.catch(err=>{
			res.status(500).json({message:err.message})
		})
		
	}

	static show(req,res) {
		CartModel.find()
		.then(dataCarts=>{
			res.status(200).send(dataCarts)
		})
		.catch(err=>{
			res.status(500).json({message:err.message})
		})
	}

	static remove(req,res) {
		CartModel.findOne({
			title:req.body.title
		})
		.then(dataCart=>{
			if(dataCart.quantity > 1 ) {
			
				CartModel.update(dataCart,{
					$set:{
						quantity:req.body.quantity
					}
				})
				.then(response=>{
					res.status(200).json({message:"1 pcs of book has been removed",response})
				})
				.catch(err=>{
					res.status(500).json({message:err.message})
				})
			}else{
				CartModel.deleteOne({
					title:req.body.title
				})
				.then((response)=>{
					res.status(200).json({message:"item has been removed",response})
				})
				.catch(err=>{
					res.status(500).json({message:err.message})
				})
			}
		})
	}

	static clear(req,res) {
		CartModel.remove({})
		.then(response=>{
			res.status(200).json({message:"chart has been clear",response})	
		})
		.catch(err=>{
			res.status(500).json({message:err.message})
		})
	}
}

module.exports = Cart