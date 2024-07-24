const express = require(`express`)
const { signUp, logIn, createContact, getAllUsers, getAllContact} = require("../controller/userController")
const router = express.Router()

router.post(`/createuser`, signUp)
router.post(`/log-in`, logIn)
router.get(`/getallusers`, getAllUsers)
router.get(`/getallcontact`, getAllContact)
router.post(`/createcontact`, createContact)

module.exports = router