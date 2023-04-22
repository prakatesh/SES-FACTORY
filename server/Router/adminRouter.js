const express=require('express')
const router=express.Router()

const {signUp} =require('../controllers/controllerSignUp')
const {Login} =require('../controllers/controllerLogin')
const {fetchFeedBack}=require('../controllers/fetch/fetchFeedBack')
const {fetchstarch}=require('../controllers/fetch/ProductRequest/fetchstarch')
const {fetchsago}=require('../controllers/fetch/ProductRequest/fetchsago')
const {fetchthappi}=require('../controllers/fetch/ProductRequest/fetchthappi')
const {manage}=require('../controllers/Manage/controllerManage')
const {fetchmanage}=require('../controllers/Manage/fetch/mainfetch')
const {fetchedit}=require('../controllers/Manage/fetch/mainfetch')
const {updatefetch}=require('../controllers/Manage/fetch/mainfetch')
const {Purchase}=require('../controllers/DashBoard/controllerDashboard')

router.post('/signup',signUp)
router.post('/login',Login)
router.get('/view/feedback',fetchFeedBack)
router.get('/view/starch',fetchstarch)
router.get('/view/sago',fetchsago)
router.get('/view/thappi',fetchthappi)
router.post('/manage',manage)
router.get('/data',fetchmanage)
router.post('/edit',fetchedit)
router.put('/update',updatefetch)
router.get('/dashboard/purchase',Purchase)


module.exports=router
