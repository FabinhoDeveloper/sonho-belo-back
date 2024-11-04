// routes/encomenda.js
const express = require('express');
const router = express.Router();
const encomendaController = require('../controllers/encomendaControllers');

router.get("/obter", encomendaController.obterEncomendas)
router.post('/cadastrar', encomendaController.cadastrarEncomenda);
router.post("/concluir/:id", encomendaController.concluirEncomenda)

module.exports = router;
