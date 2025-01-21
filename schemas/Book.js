const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title for your book."]
    }, 
    author: {
        type: String,
        required: [true, "Please enter an author for your book."]
    },
    read: {
    type: Boolean,
    default: false
    }
})

module.exports = mongoose.model("Book", bookSchema);