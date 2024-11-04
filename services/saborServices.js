const Sabor = require("../models/saborModel")

async function obterSabores() {
    try {
        const sabores = await Sabor.findAll()
        return sabores

    } catch (error) {
        console.error("Erro ao obter sabores: ", error)
        throw error        

    }
}

async function obterSaborPorId(dados) {
    const {id} = dados

    try {
        const sabor = await Sabor.findOne({
            where: {id}
        })
        if (!sabor) {
            throw new Error("Nenhum sabor encontrado com este ID")
        }

        return sabor

    } catch (error) {
        console.error("Erro ao obter sabores: ", error)
        throw error        
    }
}

async function cadastrarSabor(dados) {
    // const {nome, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco} = dados
    const {nome, descricao, imagemUrl} = dados

    try {
        const saborCadastrado = await Sabor.create({
            nome,
            descricao,
            imagemUrl
        })

        return saborCadastrado

    } catch (error) {
        console.error("Erro ao cadastrar sabor: ", error)
        throw error
    }
}

async function excluirSabor(dados) {
    const {id} = dados

    try {
        const saborExcluido = await Sabor.destroy({
            where: {id}
        })

        if (!saborExcluido) {
            throw new Error("Nenhum sabor excluído!")
        }

        return saborExcluido
    } catch (error) {
        console.error("Erro ao excluir sabor: ", error)
        throw error
    }
}

async function editarSabor(dados) {
    const {id, nome, descricao, imagemUrl} = dados

  try {
    const [linhasAtualizadas] = await Sabor.update({
      nome,
      descricao,
      imagemUrl
    }, {
      where: {id}
    })

    if (linhasAtualizadas.length === 0) {
      throw new Error("Nenhuma linha atualizada!")
    }

    return linhasAtualizadas
  } catch (error) {
      console.error("Erro ao concluir encomenda: ", error);
      throw error;  
  }
}

module.exports = {obterSabores, cadastrarSabor, obterSaborPorId, excluirSabor, editarSabor}