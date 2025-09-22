const Models = require("../models/index");
const Joi = require("joi");
const helper = require("../helper/validation");
const authData=require('../middleware/authentication');
Models.userModel.hasMany(Models.commentModel,{foreignKey:"userId",as:"commentGiven"});
Models.commentModel.belongsTo(Models.userModel,{foreignKey:"userId",as:"usercomment"});
Models.PostModel.hasMany(Models.commentModel,{foreignKey:"postId",as:"commentRecevied"});
Models.commentModel.belongsTo(Models.PostModel,{foreignKey:"postId",as:"postcomment"});

module.exports=
{
         postComment:async(req,res) =>
           {
                 try{
                    
                   const schema=Joi.object({
                     //userId:Joi.string().required(),
                    postId:Joi.string().required(),
                    Messages:Joi.string().required(),
                });
                   const userId=req.user.id;
                   console.log("....",userId)
                  const payload=await helper.validationJoi(req.body,schema);
                  const comment=await Models.commentModel.create({
                    userId:userId,
                    postId:payload.postId,
                    Messages:payload.Messages
                });
                return res.status(200).json({message:"comment related data entered",comment});
            }
            catch(error)
            {
            console.log(error);
            return res.status(400).json({message:"ERROR while entering data in comment table"});
            }
           },
           getpostcomment:async(req ,res) =>
           {
            try{
                console.log(">>>>>>>>>",req.body);
                const{postId}=req.body;
                const commit= await Models.commentModel.findAndCountAll({where:{postId:postId},
                include:[{
                    model:Models.userModel,
                   as:"usercomment",
             } ,
           ]});
            console.log(",,,",commit);
            return res.status(200).json({message:"Comment data entered",commit})
            }
            catch(error)
            {
             console.log(error);
             return res.status(400).json({message:"ERROR while entering comment model related data"})
            }
           }
}