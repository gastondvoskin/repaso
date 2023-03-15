const createUser = require("../controllers/usersController");

const getUsersHandler = (req, res) => {
    const name = req.query.name; 
    // if (name !== undefined) {     produce el mismo resultado
    if (!name) return res.status(200).send("NIY: trae la info de todos los usuarios");
    res.status(200).send("NIY: trae la info del usuario indicado por query");

};

const getUserByIdHandler = (req, res) => {
    const id = req.params.id; 
    res.status(200).send("NIY: Esta ruta trae la info de un usuario buscado por id");
};

const createUserHandler = async (req, res) => {
    // console.log("req.body: ", req.body);
    const { name, email, phone } = req.body;
    try {
        const newUser = await createUser(name, email, phone);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = {
    getUsersHandler, 
    getUserByIdHandler, 
    createUserHandler
};