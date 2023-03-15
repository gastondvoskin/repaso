// responsabilidad: definir modelo

const { DataTypes } = require("sequelize");

module.exports = (seq) => {
    seq.define(
        "User", 
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                // validate: {
                //     is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            // created: {
            //     type: DataTypes.BOOLEAN,
            //     defaultValue: true
            // }, 
            // nueva: {
            //     type: DataTypes.BOOLEAN,
            //     defaultValue: true
            // }
        }, 
        {timestamps: false}
    )
};