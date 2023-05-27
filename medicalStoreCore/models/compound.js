const moment = require("moment/moment");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Compound = sequelize.define("compound", {
        compoundName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        compoundDescription: {
            type: DataTypes.STRING
        },
        imageSource: {
            type: DataTypes.STRING
        },
        imageAttribute: {
            type: DataTypes.STRING
        },
        custom_date: {
            type: DataTypes.DATE
        }
    })

    return Compound;
}