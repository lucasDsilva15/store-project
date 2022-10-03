const mongoose = require('mongoose')

const Schema = mongoose.Schema

const crunchySchema = new Schema({
    name: {type: String, required: true},
    productimage: {type: String},
    price: {type: Number, required: true},
    productdescription: {type: String, required: true},
    inventory: {type: Number, required: true}
})

const crunchyProducts = mongoose.model('Crunchy Spin Inventory', crunchySchema)

module.exports = crunchyProducts