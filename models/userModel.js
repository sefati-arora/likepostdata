module.exports=(Sequelize,sequelize,DataTypes) =>
{
    return sequelize.define(
        "userTable",
        {
            ...require('./core')(Sequelize,DataTypes),
            userName:{
                type:DataTypes.STRING(50),
                allowNull:true
            },
           email:{
            type:DataTypes.STRING(100),
            allowNull:true,
           } ,
           phoneNumber:
           {
                type:DataTypes.STRING(100),
                allowNull:true 
           },
           Bio:{
            type:DataTypes.STRING(100),
            allowNull:true
           }
        },
        {
            tablename:"usertables"
        }
    )
}