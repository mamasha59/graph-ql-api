const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
    },
    img:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    decsiprion:{
        type: String,
        required: true,
    },
    brend:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    altDescription:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    article:{
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('product', productSchema);