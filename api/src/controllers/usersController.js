const { User } = require("../db");      // model

const createUser = async (name, email, phone) => {
    const newUser = await User.create({name, email, phone})         // await porque User.create retorna una promesa
    return newUser;
};

module.exports = createUser;