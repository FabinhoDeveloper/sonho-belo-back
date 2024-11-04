const encomendaService = require('../services/encomendaServices');

// Função para lidar com a requisição de criação de encomenda
async function cadastrarEncomenda(req, res) {
  try {
    const encomenda = await encomendaService.criarEncomenda(req.body);
    res.status(201).json({ message: 'Encomenda criada com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar a encomenda.' });
  }
}

async function obterEncomendas(req, res) {
  try {
    const lista_encomendas = await encomendaService.obterEncomendas()
    res.json(lista_encomendas)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar as encomendas.' });
  }
}

async function concluirEncomenda(req, res) {
    const {id} = req.params

    try {
      const encomendaConcluida = await encomendaService.concluirEncomenda({id})

      res.json({
        mensagem: 'Encomenda concluida com sucesso!',
        encomendaConcluida
      })

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao concluir a encomenda.' });
    }
}

module.exports = { cadastrarEncomenda, obterEncomendas, concluirEncomenda };
