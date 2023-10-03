const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxLength: [20, 'Name should be less than 20 character']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unquie: true
    },
    password: {
        type: String,
        unquie: true
    }
})

module.exports = mongoose.model("User", userSchema)