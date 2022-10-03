const express = require('express')
const router = express.Router()
const { showNewPage, createProduct, showAllProducts, deleteProduct, updateProduct, editProduct, showCurrentProduct, generateSeedData, } = require('../controllers/crunchy-spin-controllers')

//INDEX
router.get('/', showAllProducts)
//NEW
router.get('/new', showNewPage)
//DELETE
router.delete('/:id', deleteProduct)
//UPDATE
router.put('/:id', updateProduct)
//CREATE
router.post('/', createProduct)
//EDIT
router.get('/:id/edit', editProduct)
//CLEAR
//SEED
router.get('/seed', generateSeedData)
//SHOW
router.get('/:id', showCurrentProduct)

module.exports = router