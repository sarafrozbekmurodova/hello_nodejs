const mongoose = require('mongoose')

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        default: ''
    }
   
});

module.exports = mongoose.model('Author', AuthorSchema);