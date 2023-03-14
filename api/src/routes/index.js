// responsabilidad: definir rutas

const { Router } = require("express");
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");

const mainRouter = Router();


// rutas
mainRouter.use("/users", usersRouter);
mainRouter.use("/posts", postsRouter);


// comentado porque se modularizó
// usersRouter = Router();
// mainRouter.get("users", (req, res) => {
//     res.status(200).send("en construccion");
// });



module.exports = mainRouter;