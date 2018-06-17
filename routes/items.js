var express = require('express')
var router = express.Router()
var Item = require('../controllers/items_controller.js')
var images = require('../helper/images.js')


router.get('/show', Item.show);

router.post('/upload', 
	images.multer.single('image'),
	images.sendUploadToGCS,
	Item.upload);


module.exports = router