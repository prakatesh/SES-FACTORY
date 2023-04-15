const express=require('express');
const router=express.Router();

const {contact}=require('../controllers/controllerContact')
const {starch}=require('../controllers/controllerStarch')
const {sago}=require('../controllers/controllerSago')
const {thappi}=require('../controllers/controllerThappi')

router.post('/contact',contact)
router.post('/product/starch',starch)
router.post('/product/sago',sago)
router.post('/product/thappi',thappi)

module.exports=router;