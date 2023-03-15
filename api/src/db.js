// responsabilidad: crear conexión con DB, definir modelos y relacionarlos 

// comentado porque al modularizar no se requiere DataTypes
// const { Sequelize, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');

require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const UserModel = require("./models/User"); // función
const PostModel = require("./models/Post");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/repaso`, 
    {logging: false}
); 


UserModel(sequelize);
PostModel(sequelize);

// console.log('sequelize.models: ', sequelize.models);

const { User, Post } = sequelize.models;    // éstos son los modelos (no las funciones que definen los modelos)

// console.log('User: ', User);

User.hasMany(Post);
Post.belongsTo(User);

// const createUserTono = async () => {
//     return await User.create({name: 'nombreAgregado', email: 'mailagregado@gmail.com', phone: '12345678'});
// }



// comentado porque se modularizó
// sequelize.define(
//     "User", 
//     {
//         id: {
//             type: DataTypes.UUID,
//             primaryKey: true,
//             defaultValue: DataTypes.UUIDV4
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//     }, 
// );

// console.log('Sequelize: ', Sequelize);        // class a instanciar
// console.log('sequelize: ', sequelize);      // objeto
// console.log('sequelize.models: ', sequelize.models);         // objeto
// console.log('sequelize.sync: ', sequelize.sync);        // función
// console.log('sequelize.define: ', sequelize.define);        // función


module.exports = { 
    sequelize, 
    ...sequelize.models
};