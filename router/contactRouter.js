const express = require(`express`)
const { createContact, getContacts, getContact } = require("../controller/contactController")
const router = express.Router()


router.post(`/user/:userId/newcontact`, createContact)
router.get(`/user/:userId/contacts`, getContacts)
router.get(`/user/:userId/contacts/:conId`, getContact)

module.exports = router