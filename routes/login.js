const express = require('express')
const router = express.Router()
const UserModal = require('../models/users')
const bcrypt = require('bcrypt')
const loginController = require('../controllers/loginController')

router.post('/', loginController.handleLogin)

module.exports = router