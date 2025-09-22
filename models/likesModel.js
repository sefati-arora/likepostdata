module.exports = (Sequelize, sequelize, DataTypes) => {
  return sequelize.define(
    "liketables",
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
      //  PostId: {
      //   type: DataTypes.UUID,
      //   allowNull: false,
      //   references: {
      //     model: "PostRtable",  
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // },
    },
    {
      tableName: "liketables",
      timestamps: true,
    }
  );
};
