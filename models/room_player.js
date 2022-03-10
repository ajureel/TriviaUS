const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Room_Player extends Model {}

Room_Player.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'player',
          key: 'id'
        }
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'room',
          key: 'id'
        }
      },
      score: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      rank: {
        type: DataTypes.INTEGER,
        defaultValue: 9999
      },
      date_played: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'room_player'
  }
);

module.exports = Room_Player;
