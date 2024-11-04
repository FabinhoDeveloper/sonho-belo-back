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

async function obterSaborPorId(req, res) {
  const {id} = req.params

  try {
    const sabor = await saborService.obterSaborPorId({id})
    res.json({sabor}) 

  } catch (error) {
    console.error('Erro ao obter sabores:', error);
    return res.status(500).json({ error: 'Erro ao obter sabores' });
  }
}

async function cadastrarSabor(req, res) {
  try {  
    const { nome, descricao, imagemUrl } = req.body;

    const saborId = await saborService.cadastrarSabor({nome, descricao, imagemUrl});
    return res.status(201).json({ sucesso: true, saborId });

  } catch (error) {
    console.error('Erro ao criar sabor:', error);
    return res.status(500).json({ error: 'Erro ao criar sabor' });
  }
}

async function excluirSabor(req, res) {
  const {id} = req.params

  try {
    const saborExcluido = await saborService.excluirSabor({id})
    return res.status(201).json({ sucesso: true, saborExcluido });

  } catch (error) {
    console.error('Erro ao excluir sabor:', error);
    return res.status(500).json({ error: 'Erro ao excluir sabor' });
  }
}

async function editarSabor(req, res) {
  const {id} = req.params
  const {nome, descricao, imagemUrl} = req.body

  try {
    const saborAtualizado = await saborService.editarSabor({id, nome, descricao, imagemUrl})

    res.json({
      mensagem: 'Sabor atualizado com sucesso!',
      saborAtualizado
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o sabor.' });
  }
}


module.exports = { obterSabores, cadastrarSabor, obterSaborPorId, excluirSabor, editarSabor };
