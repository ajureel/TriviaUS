const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Host extends Model {}

Host.init(
  {
    // columns will go here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      // define a password column
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      }
  }, 
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'host'
  }
);

module.exports = Host;