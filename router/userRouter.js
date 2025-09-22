const express= require("express");
const userController=require('../controller/PostController');
const Usercontrol=require('../controller/userController');
const commentController=require('../controller/commentController');
const {authentication}=require('../middleware/authentication')
const router=express.Router()

router.post('/user',userController.user);
router.post('/signUp',Usercontrol.signUp);
router.post('/userlike',Usercontrol.userlike);
router.post('/getuserlike',Usercontrol.getuserlike);
router.post('/postComment', authentication,commentController.postComment);
router.post('/getpostcomment',commentController.getpostcomment);
module.exports=router;