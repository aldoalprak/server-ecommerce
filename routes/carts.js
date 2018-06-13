const express = require('express')
const router = express.Router()
const Cart = require('../controllers/carts_controller.js')

router.post('/add',Cart.add)
router.get('/show',Cart.show)
router.post('/remove',Cart.remove)
router.delete('/clear',Cart.clear)


module.exports = router
