const express = require("express");
const contactus = require("../controllers/contactus.js")
const contact = require("../controllers/contact.js")

const router = express.Router()

router.get('/', contactus)
router.post('/contact', contact)

module.exports = router;