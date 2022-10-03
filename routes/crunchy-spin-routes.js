const express = require('express')
const router = express.Router()
const { showNewPage, createProduct, showAllProducts, } = require('../controllers/crunchy-spin-controllers')

//INDEX
router.get('/', showAllProducts)
//NEW
router.get('/new', showNewPage)
//DELETE
//UPDATE
//CREATE
router.post('/', createProduct)
//EDIT
//CLEAR
//SEED
//SHOW

module.exports = router