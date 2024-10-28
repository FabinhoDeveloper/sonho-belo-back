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

async function cadastrarSabor(dados) {
    // const {nome, sabores, dataRetirada, horaRetirada, tipo, quantidade, entrega, endereco} = dados
    const {nome, descricao, urlImagem} = dados

    try {
        const saborCadastrado = await Sabor.create({
            nome,
            descricao,
            urlImagem
        })

        return saborCadastrado

    } catch (error) {
        console.error("Erro ao cadastrar sabor: ", error)
        throw error
    }
}

module.exports = {obterSabores, cadastrarSabor}