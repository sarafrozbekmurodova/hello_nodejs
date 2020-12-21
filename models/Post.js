const mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: ''
    },
    author_id: {
        type: String,
        default: true
    },
    author_name: {
        type: String,
        default: true
    }
});

module.exports = mongoose.model('Post', PostSchema);