const express=require('express')
const router=express.Router()

const {signUp} =require('../controllers/controllerSignUp')
const {Login} =require('../controllers/controllerLogin')
const {fetchFeedBack}=require('../controllers/fetch/fetchFeedBack')
const {fetchstarch}=require('../controllers/fetch/ProductRequest/fetchstarch')
const {fetchsago}=require('../controllers/fetch/ProductRequest/fetchsago')
const {fetchthappi}=require('../controllers/fetch/ProductRequest/fetchthappi')

router.post('/signup',signUp)
router.post('/login',Login)
router.get('/view/feedback',fetchFeedBack)
router.get('/view/starch',fetchstarch)
router.get('/view/sago',fetchsago)
router.get('/view/thappi',fetchthappi)

module.exports=router
