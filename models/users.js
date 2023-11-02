const mongoose = require('mongoose')

const UserSchma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } })

// UserSchma.virtual('createAt').get(function () {
//     this.name =
// })

module.exports = UserModel = mongoose.model('User', UserSchma)