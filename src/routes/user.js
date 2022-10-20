const express = require("express");
const login = require("../controllers/login.js")
const userlogin = require("../controllers/userlogin.js")
const logout = require("../controllers/logout.js")

const router = express.Router()

router.get('/', login)
router.post('/userlogin', userlogin)
router.get('/logout', logout)

module.exports = router;