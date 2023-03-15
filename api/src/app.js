// responsabilidad: crear el servidor

const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(mainRouter); // middleware enrutador


module.exports = app; 



// app.use((req, res, next) => {
//     console.log("se ingresó al middleware");
//     next();
// });
