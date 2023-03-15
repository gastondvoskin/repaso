const { Router } = require("express");
usersRouter = Router();
const { getUsersHandler, getUserByIdHandler, createUserHandler } = require("../handlers/usersHandlers");

// rutas de users
// comentado porque luego se modularizó
// usersRouter.get("/", (req, res) => {
//     res.status(200).send("NIY: Esta ruta trae la info de todos los usuarios");
// });

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getUserByIdHandler);
usersRouter.post("/", createUserHandler);

module.exports = usersRouter;