// responsabilidad: iniciar la aplicación

const app = require("./src/app.js");

const port = 3000;


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})