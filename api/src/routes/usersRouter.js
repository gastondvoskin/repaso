const { Router } = require("express");

usersRouter = Router();


// rutas de users
usersRouter.get("/", (req, res) => {
    res.status(200).send("NIY: Esta ruta trae la info de todos los usuarios");
});

usersRouter.get("/:id", (req, res) => {
    res.status(200).send("NIY: Esta ruta trae la info de un usuario buscado por id");
});

usersRouter.post("/", (req, res) => {
    res.status(200).send("NIY: Esta ruta crea un usuario");
});



module.exports = usersRouter;