module.exports=(Sequelize,sequelize,DataTypes) =>
{
    return sequelize.define(
        "PostRtable",
        {
            ...require('./core')(Sequelize,DataTypes),
            userPost:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            Description:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            userId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
          model: "usertables",  
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
        },
        {
           tableName:"PostRtable"
        }
    )
}