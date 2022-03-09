const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Player extends Model {}

Player.init(
  {
    // columns will go here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      screen_name: {
        type: DataTypes.STRING,
        allowNull: false
      }      
      //Add big brother info (ie IP Address)
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'player'
  }
);

module.exports = Player;