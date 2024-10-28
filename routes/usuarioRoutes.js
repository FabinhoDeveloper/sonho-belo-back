const usuarioControllers = require("../controllers/usuarioControllers")
const express = require("express")
const router = express.Router()

router.post("/login", usuarioControllers.loginUsuario)
router.post("/cadastrar", usuarioControllers.cadastrarUsuario)
router.post("/editar", usuarioControllers.editarUsuario)
router.post("/excluir", usuarioControllers.excluirUsuario)

module.exports = router