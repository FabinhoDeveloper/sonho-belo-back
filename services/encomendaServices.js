const {Sabor, Encomenda} = require("../models/relacionamentos/saborEncomenda")

// Função para criar uma nova encomenda e associar sabores
async function criarEncomenda(data) {
  try {
    const { nome_cliente, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco } = data;
    const encomenda = await Encomenda.create({
      nome_cliente,
      data_retirada: dataRetirada,
      hora_retirada: horaRetirada,
      tipo,
      quantidade,
      para_entrega: entrega === 'true', // converter string para booleano
      endereco_entrega: endereco
    });
  
  
    encomenda.addSabores(sabores)
  
    return encomenda;
  } catch (error) {
    console.error("Erro ao cadastrar encomenda: ", error)
    throw error  
  }
}

async function obterEncomendas() {
  try {
      const lista_encomendas = await Encomenda.findAll({
          include: [
              {
                  model: Sabor,
                  as: 'sabores', // Certifique-se de usar o alias correto
                  attributes: ['nome']
              },
          ],
      });

      return lista_encomendas;

  } catch (error) {
      console.error("Erro ao listar encomendas: ", error);
      throw error;  
  }
}


module.exports = { criarEncomenda, obterEncomendas };
