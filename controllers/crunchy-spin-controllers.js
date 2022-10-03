const crunchyProducts = require('../models/inventory')
const seed = require('../models/seed')
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
const deleteProduct = (req,res) => {
    crunchyProducts.findByIdAndDelete(req.params.id, (err,deletedProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/crunchy-spin')
        }
    })
}
//UPDATE
const updateProduct = (req,res) => {
    crunchyProducts.findByIdAndUpdate(req.params.id, req.body, (err, updatedProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/crunchy-spin/${req.params.id}`)
        }
    })
}
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
const editProduct = (req,res) => {
    crunchyProducts.findById(req.params.id, (err, currentProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('./Edit', {products: currentProduct})
        }
    })
}
//CLEAR
//SEED
const generateSeedData = (req,res) => {
    crunchyProducts.deleteMany({}, (err, deletedProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            crunchyProducts.create(seed.products, (err, createdProduct) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/crunchy-spin')
                }
            })
        }
    })
}
//SHOW
const showCurrentProduct = (req,res) => {
    crunchyProducts.findById(req.params.id, (err,currentProduct) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('./Show', {products: currentProduct})
        }
    })
}

module.exports = {
    showNewPage,
    createProduct,
    showAllProducts,
    deleteProduct,
    updateProduct,
    editProduct,
    showCurrentProduct,
    generateSeedData,

}