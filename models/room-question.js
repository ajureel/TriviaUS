const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Room_Question extends Model {}

// create fields/columns for Post model
Room_Question.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false
      },
      correct_answer: {
        type: DataTypes.STRING,
        allowNull: false
      },
      incorrect_answers: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'room_question'
    }
  );

  module.exports = Room_Question;