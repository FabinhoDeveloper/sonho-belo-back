const usuarioControllers = require("../controllers/usuarioControllers")
const express = require("express")
const router = express.Router()

router.post("/login", usuarioControllers.loginUsuario)
router.post("/cadastrar", usuarioControllers.cadastrarUsuario)
router.post("/editar", usuarioControllers.editarUsuario)
router.post("/excluir/:id", usuarioControllers.excluirUsuario)
router.get("/obter-numero", usuarioControllers.obterNumeroDeUsuarios)
router.get("/obter", usuarioControllers.obterUsuarios)

module.exports = router