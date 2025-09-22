const express= require("express");
const userController=require('../controller/PostController');
const Usercontrol=require('../controller/userController');
const router=express.Router()

router.post('/user',userController.user);
router.post('/signUp',Usercontrol.signUp);
router.post('/userlike',Usercontrol.userlike);
router.post('/getuserlike',Usercontrol.getuserlike);
module.exports=router;