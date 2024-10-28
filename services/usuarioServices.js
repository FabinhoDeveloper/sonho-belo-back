const Usuario = require("../models/usuarioModel")
const bcrypt_config = require("../config/bcrypt_config");

async function listarUsuarioPorEmail(dados) {
    const {email} = dados

    try {
        const usuario = await Usuario.findOne({
            where: {
                email: email
            }
        });

        return usuario

    } catch (error) {
        console.error("Erro ao buscar usuário por E-mail", error)
        throw error
    }
}

async function cadastrarUsuario(dados) {
    const {nome, email, senha} = dados

    try {
        const usuarioCriado = await Usuario.create({
            nome, 
            email, 
            senha: await bcrypt_config.gerarSenhaHash(senha)
        })

        return usuarioCriado

    } catch (error) {
        console.error("Erro ao cadastrar usuario na camada SERVICE!", error);
        throw error
    }
}

async function editarUsuario(dados) {
    const {id, nome, email, senha} = dados

    try {
        const usuarioASerAtualizado = await Usuario.findOne({
            where: {id}
        })

        if (!usuarioASerAtualizado) {
            throw new Error("Usuário não encontrado com este ID!")
        }   
        
        const [camposAtualizados] = await Usuario.update({
            nome, email, senha: await bcrypt_config.gerarSenhaHash(senha)
        }, {
            where: {id}
        })

        if (!camposAtualizados) {
            throw new Error("Nenhum campo modificado!")
        }

        return camposAtualizados

    } catch (error) {
        console.error("Erro ao atualizar usuario na camada SERVICE!", error);
        throw error
    }
}   

async function excluirUsuario(dados) {
    const {id} = dados

    try {

        if (!id) {
            throw new Error("O ID é obrigatório!")
        }

        const usuarioDeletado = await Usuario.destroy({where: {id}})

        if (!usuarioDeletado) {
            throw new Error("Usuário não encontrado com este ID!")
        }

        return usuarioDeletado

    } catch (error) {
        console.error("Erro ao atualizar usuario na camada SERVICE!", error);
        throw error
    }
}

module.exports = {cadastrarUsuario, listarUsuarioPorEmail, editarUsuario, excluirUsuario}