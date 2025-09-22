module.exports = (Sequelize, sequelize, DataTypes) => {
  return sequelize.define(
    "commenttable",
    {
      ...require('./core')(Sequelize, DataTypes),

      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "usertables",  
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
       postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "PostRtable",  
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      Messages:{
        type:DataTypes.STRING(255),
        allowNull:true,
      }

      
    },
    {
      tableName: "commenttable",
      timestamps: true,
    }
  );
};

