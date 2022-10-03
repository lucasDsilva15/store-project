const crunchyProducts = require('../models/inventory')

//INDEX
const showAllProducts = (req,res) => {
    crunchyProducts.find({}, (err, foundProducts) => {
        if (err){
            res.status(400).json(err)
        } else {
            res.status(200).render('./Index', {products: foundProducts})
        }
    })
}
//NEW
 const showNewPage = (req,res) => {
    res.render('./New')
 }
//DELETE
//UPDATE
//CREATE
const createProduct = (req,res) => {
    crunchyProducts.create(req.body, (err, createdProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/crunchy-spin')
        }
    })
}
//EDIT
//CLEAR
//SEED
//SHOW

module.exports = {
    showNewPage,
    createProduct,
    showAllProducts,

}