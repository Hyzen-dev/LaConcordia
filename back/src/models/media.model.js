const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.config");

class Media extends Model { };

Media.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      mediasFile: {
        type: DataTypes.STRING,
        allowNull: false
      },
      albumId: {
        type: DataTypes.INTEGER,
      },
}, {
    sequelize,
    tableName: 'medias',
    modelName: 'Media'
});

module.exports = Media;