const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.config");

class Message extends Model { };

Message.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mail: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT('long'),
        allowNull: false
      }, 
}, {
    sequelize,
    tableName: 'messages',
    modelName: 'Message'
});

module.exports = Message;