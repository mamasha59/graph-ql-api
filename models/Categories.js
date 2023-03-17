const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    nameRu: {
        type: String,
        required: true,
    },
    linkName: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('category', categorySchema);