const { Router } = require("express");

postsRouter = Router();

postsRouter.get("/", (req, res) => {
    res.status(200).send("NIY: Esta ruta trae la info de todos los posts");
});


module.exports = postsRouter;