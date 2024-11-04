const express = require('express');
const router = express.Router();
const saborController = require('../controllers/saborControllers');

// Rota para criar um sabor
router.get('/obter', saborController.obterSabores)
router.get('/obter/:id', saborController.obterSaborPorId)
router.post('/cadastrar', saborController.cadastrarSabor)
router.post('/excluir/:id', saborController.excluirSabor)
router.post('/editar/:id', saborController.editarSabor)

module.exports = router;