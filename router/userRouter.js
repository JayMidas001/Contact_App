const express = require(`express`)
const { signUp, logIn, getAllUsers, verifyEmail, resendVerificationEmail, forgotPassword, resetPassword, getOne} = require("../controller/userController")
const router = express.Router()

router.post(`/sign-up`, signUp)

router.post(`/log-in`, logIn)

router.get(`/verify/:token`, verifyEmail)

router.post(`/resend-verification`, resendVerificationEmail)

router.post(`/forgot-password`, forgotPassword)

router.post(`/reset-password/:token`, resetPassword)

router.get(`/allusers`, getAllUsers)

router.get(`/getone/:userId`, getOne)


module.exports = router