const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

// Configurações
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/api/animals", require("./routes/animal.routes"));
app.use("/api/veterinarians", require("./routes/veterinarian.routes"));

// Sincronizar banco de dados
db.sequelize.sync()
  .then(() => {
    console.log("Banco de dados sincronizado");
  })
  .catch(err => {
    console.log("Falha ao sincronizar banco: " + err.message);
  });

module.exports = app;