var express = require('express')
var router = express.Router()
var Item = require('../controllers/items_controller.js')


router.get('/show', Item.show);
router.post('/create', Item.create);

module.exports = router