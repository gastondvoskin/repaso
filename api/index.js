// responsabilidad: iniciar la aplicación

const app = require("./src/app.js");

const { sequelize } = require("./src/db");

app.listen(3000, () => {
  // sequelize.sync({force: true});
  sequelize.sync({alter: true});
  console.log(`Listening on port 3000`);
})