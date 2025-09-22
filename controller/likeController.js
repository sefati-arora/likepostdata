const Models = require("../models/index");
const Joi = require("joi");
const helper = require("../helper/validation");
const commonhelper = require("../helper/commonHelper");
const userModel = require("../models/userModel");

Models.userModel.hasMany(Models.likesModel, {
  foreignKey: "userId",
  as:"likedTo"
});
Models.likesModel.belongsTo(Models.userModel, {
  foreignKey: "userId",
  as: "likedBy", 
});
module.exports=
{
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
                // postId:payload.postId,
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
            const {userId} = req.body
            const sub= await Models.likesModel.findAndCountAll({
                where:{userId:userId
                },
               include:[{
                model:Models.userModel,
                as:"likedBy"
               },
              ],
               });
               const data= await Models.userModel.findAndCountAll({
                where:{id:userId
                },
               include:[{
                model:Models.likesModel,
                as:"likedTo"
               },
              ]
       
        });
        console.log(sub);
          console.log(data);
        return res.status(200).json({message:"data fetch successfully",sub,data});
        }
        catch(error)
        {
          console.log(error);
          return res.status(400).json({message:"ERROR in fetching data"})
        }
    }
}
