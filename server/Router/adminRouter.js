const express=require('express')
const router=express.Router()

const {signUp} =require('../controllers/controllerSignUp')
const {Login} =require('../controllers/controllerLogin')

router.post('/signup',signUp)
router.post('/login',Login)

module.exports=router
