const saborService = require('../services/saborServices');

async function obterSabores(req, res) {
  try {
    const sabores = await saborService.obterSabores()
    res.json({sabores}) 

  } catch (error) {
    console.error('Erro ao obter sabores:', error);
    return res.status(500).json({ error: 'Erro ao obter sabores' });
  }
}

async function cadastrarSabor(params) {
  try {  
    const { nome, descricao } = req.body;
    const imagemUrl = req.file.location; 

    const saborId = await saborService.cadastrarSabor({nome, descricao, imagemUrl});
    return res.status(201).json({ success: true, saborId });

  } catch (error) {
    console.error('Erro ao criar sabor:', error);
    return res.status(500).json({ error: 'Erro ao criar sabor' });
  }
}

module.exports = { obterSabores, cadastrarSabor };
