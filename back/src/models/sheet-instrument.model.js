const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database.config");

class SheetInstrument extends Model { };

SheetInstrument.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      sheetId: {
        type: DataTypes.INTEGER,
      },
      instrumentId: {
        type: DataTypes.INTEGER,
      }, 
}, {
    sequelize,
    tableName: 'sheets-instruments',
    modelName: 'SheetInstrument'
});

module.exports = SheetInstrument;