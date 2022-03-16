//QoD - Question of the Day History
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class QoD extends Model {}

QoD.init(
  {
    // columns will go here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      day_used: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW  
      },
      question: {
        type: DataTypes.JSON,
        allowNull: false,
      }
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'qod'
  }
);

module.exports = QoD;