const express=require('express')
const router=express.Router()

const {signUp} =require('../controllers/controllerSignUp')
const {Login} =require('../controllers/controllerLogin')
const {fetchFeedBack}=require('../controllers/fetch/fetchFeedBack')

router.post('/signup',signUp)
router.post('/login',Login)
router.get('/view/feedback',fetchFeedBack)

module.exports=router
