const express= require("express");
const userController=require('../controller/PostController');
const Usercontrol=require('../controller/userController');
const likecontrol=require('../controller/likeController');
const router=express.Router()

router.post('/user',userController.user);
router.post('/userDetail',Usercontrol.userDetail);
router.post('/userlike',likecontrol.userlike);
router.post('/getuserlike',likecontrol.getuserlike);
module.exports=router;