const express=require('express');
const router=express.Router();

const {contact}=require('../controllers/controllerContact')
const {starch}=require('../controllers/controllerStarch')


router.post('/contact',contact)
router.post('/product/starch',starch)

module.exports=router;