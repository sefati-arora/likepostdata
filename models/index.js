const Sequelize= require("sequelize");
const commentModel = require("./commentModel");
const sequelize= require('../config/connectdb').sequelize;

module.exports=
{
    PostModel:require('./PostModel')(Sequelize,sequelize,Sequelize.DataTypes),
    userModel:require('./userModel')(Sequelize,sequelize,Sequelize.DataTypes),
    likesModel:require('./likesModel')(Sequelize,sequelize,Sequelize.DataTypes),
    commentModel:require('./commentModel')(Sequelize,sequelize,Sequelize.DataTypes)
}