const Models = require("../models/index");
const Joi = require("joi");
const helper = require("../helper/validation");
const commonhelper = require("../helper/commonHelper");

module.exports = {
  user: async (req, res) => {
    try {
       console.log(">>>>>",req.files);
      const schema = Joi.object({
        Description: Joi.string().required(),
      });
      const payload = await helper.validationJoi(req.body, schema);
      let file = req.files?.file;

      if (!file) {
        return res.status(404).json({ message: "not found!" });
      }

      if (!Array.isArray(file)) {
        file = [file];
      }
      for (let i = 0; i < file.length; i++) {
        const filepath = await commonhelper.fileUpload(file[i]);
        await Models.PostModel.create({
          userPost: filepath,
          Description:payload.Description
        });
      }
      return res.status(200).json({ message: "images enter successfully" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "server error" });
    }
  },
};
