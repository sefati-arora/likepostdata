const Models = require("../models/index");
const Joi = require("joi");
const helper = require("../helper/validation");
const commonhelper = require("../helper/commonHelper");

module.exports=
{
    userDetail:async(req ,res)=>
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
    }
}