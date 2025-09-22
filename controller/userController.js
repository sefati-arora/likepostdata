const Models = require("../models/index");
const Joi = require("joi");
const helper = require("../helper/validation");
const commonhelper = require("../helper/commonHelper");
Models.userModel.hasMany(Models.likesModel, { foreignKey: "userId", as: "likesGiven" });
Models.likesModel.belongsTo(Models.userModel, { foreignKey: "userId", as: "User" });
Models.PostModel.hasMany(Models.likesModel,{foreignKey:"postId",as:"likesReceived"});
Models.likesModel.belongsTo(Models.PostModel, { foreignKey: "postId", as: "post" });


module.exports=
{
    signUp:async(req ,res)=>
    {
        try{
            const schema=Joi.object({
                userName:Joi.string().required(),
                email:Joi.string().required(),
                phoneNumber:Joi.string().required(),
                Bio:Joi.string().required()
            });
            const payload= await helper.validationJoi(req.body,schema);
            const user= await Models.userModel.create({
                userName:payload.userName,
                email:payload.email,
                phoneNumber:payload.phoneNumber,
                Bio:payload.Bio
            })
            return res.status(200).json({message:"UserData entered successfully",user})
        }
        catch(error)
        {
            console.log(error);
            return res.status(400).json({message:"ERROR while sending data in DB"});
        }
    },
    userlike: async(req ,res)=>
       {
           try
           {
               const schema=Joi.object({
                     userId:Joi.string().required(),
                      postId:Joi.string().required(),
                     
               });
               const payload= await helper.validationJoi(req.body,schema);
               console.log("....",req.body)
               const user=await Models.likesModel.create({
                    userId:payload.userId,
                    postId:payload.postId,
               })
               return res.status(200).json({message:"like based data enter successfully",user});
           }
           catch(error)
           {
                console.log(error);
                return res.status(400).json({message:"like based data create error while entering"});
           }
       },
       getuserlike: async(req,res) =>
       {
           try{
               console.log("....",req.body);
               const {postId} = req.body
               
               const sub= await Models.likesModel.findAndCountAll({
                   where:{  postId: postId,
                   },
                  include:[{
                   model:Models.userModel,
                   as:"User"
                  },
                  {
                   model:Models.PostModel,
                   as:"post"
                  },
                 ],
                  });
                  
           console.log(sub);
           return res.status(200).json({message:"data fetch successfully",sub});
           }
           catch(error)
           {
             console.log(error);
             return res.status(400).json({message:"ERROR in fetching data"})
           }
       },
      
}