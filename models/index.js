const Sequelize= require("sequelize");
const sequelize= require('../config/connectdb').sequelize;

module.exports=
{
    PostModel:require('./PostModel')(Sequelize,sequelize,Sequelize.DataTypes),
    userModel:require('./userModel')(Sequelize,sequelize,Sequelize.DataTypes),
    likesModel:require('./likesModel')(Sequelize,sequelize,Sequelize.DataTypes)
}