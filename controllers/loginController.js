const UserModal = require('../models/users')
const bcrypt = require('bcrypt')

const handleLogin = async (req, res) => {
    const invalidEmail = await UserModal.findOne({ email: req.body.email })
    if (!invalidEmail) {
        return res.status(401).json({ message: 'Email is Invalid' })
    }
    else {
        const password = await bcrypt.compare(req.body.password, invalidEmail.password)
        if (password) {
            return res.status(200).json({ message: 'Login SuccessFully', id: invalidEmail._id })
        }
        else {
            return res.status(401).json({ message: 'Password is Invalid' })
        }
    }

}

module.exports = { handleLogin }