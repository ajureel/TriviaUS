const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Room extends Model {}
  

// create fields/columns for Post model
Room.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      room_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      expires: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: (DataTypes.NOW + 7200000) //2 hour * 60 minute * 60 second * 1000 millisecond
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "OPEN" //OPEN, INPROGRESS, CLOSED
      },
      host_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'host',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'room'
    }
  );

  module.exports = Room;