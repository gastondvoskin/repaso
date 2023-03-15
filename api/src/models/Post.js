// responsabilidad: definir modelo

const { DataTypes } = require("sequelize");

module.exports = (seq) => {
    seq.define(
        "Post",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {timestamps: false}
    )
};
