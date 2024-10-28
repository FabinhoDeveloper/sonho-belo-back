// Configuração das variáveis de ambiente
require("dotenv").config()

// Importação das models

const sequelize = require("./config/db_config")
const Sabor = require("./models/saborModel")
const Usuario = require("./models/usuarioModel")
const Encomenda = require("./models/encomendaModel")

// Importação das models

const saborRoutes = require("./routes/saborRoutes")
const usuarioRoutes = require("./routes/usuarioRoutes")
const encomendaRoutes = require("./routes/encomendaRoutes")

// Instancia do servidor

const express = require("express")
const app = express()
app.use(express.json())

// Configuração das rotas

app.use("/sabor", saborRoutes)
app.use("/usuario", usuarioRoutes)


// Sincronização do banco de dados

sequelize.sync({ force: false }) // ou { alter: true } para atualizar a estrutura
  .then(() => {
    console.log("Banco sincronizado!");
})
  .catch((err) => {
    console.error("Erro ao sincronizar o banco:", err);
});

// Servidor

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`API executando na porta ${PORT}`)
})
