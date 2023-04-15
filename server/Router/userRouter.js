const express=require('express');
const router=express.Router();

const {contact}=require('../controllers/contact')
// router.route('/contact').post(contact.kcontact)

router.post('/contact',contact)

module.exports=router;