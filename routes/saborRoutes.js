const express = require('express');
const router = express.Router();
const saborController = require('../controllers/saborControllers');

// Rota para criar um sabor
router.get('/obter', saborController.obterSabores)
router.post('/cadastrar', saborController.cadastrarSabor)

module.exports = router;