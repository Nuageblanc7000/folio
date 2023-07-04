const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 *
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>} project
 */
module.exports = (sequelize) => {
  const Project = sequelize.define(
    "Messages",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.TEXT, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
    },
    { paranoid: true }
  );
  return Project;
};
