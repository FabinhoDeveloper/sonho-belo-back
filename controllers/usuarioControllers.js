const usuarioServices = require("../services/usuarioServices")
const bcrypt_config = require("../config/bcrypt_config")

async function loginUsuario(req, res) {
    const {email, senha} = req.body
    
    try {
        const usuarioListado = await usuarioServices.listarUsuarioPorEmail({email})

        if (!usuarioListado) {
            return res.status(401).json({mensagem: 'Email ou senha incorretos!'})
        }

        const loginCorreto = await bcrypt_config.comparaSenha(senha, usuarioListado.senha)

        if (!loginCorreto) {
            return res.status(401).json({mensagem: 'Email ou senha incorretos!'})
        }

        res.json({
            autorizado: true,
            usuario: usuarioListado
        })

    } catch (error) {
        console.error('Erro ao listar usuario: ', error)
        res.status(500).json({mensagem: 'Erro ao buscar usuario'})
    }
}

async function cadastrarUsuario(req, res) {
    const {nome, email, senha} = req.body

    try {
        const usuarioCriado = await usuarioServices.cadastrarUsuario({nome, email, senha})
        
        return res.json({
            mensagem: 'Usuário cadastrado com sucesso!',
            usuarioCriado
        })
    } catch (error) {
        console.error('Erro ao cadastrar usuário na camadada CONTROLLER: ', error)
        res.status(500).json({ mensagem: 'Erro ao cadastrar usuário na camada CONTROLLER!' })
    }
}

async function editarUsuario(req, res) {
    const {id, nome, email, senha} = req.body

    try {
        if (!id) {
            return res.status(400).json({mensagem: "O ID é obrigatório!"})
        }

        const usuarioAtualizado = await usuarioServices.editarUsuario({id, nome, email, senha})

        res.json({
            sucesso: true,
            mensagem: "Usuário atualizado com sucesso!",
            linhasAtualizadas: usuarioAtualizado
        })

    } catch (error) {
        console.error('Erro ao atualizar usuário na camadada CONTROLLER: ', error)
        res.status(500).json({ mensagem: 'Erro ao atualizar usuário na camada CONTROLLER!' })
    }
}

async function excluirUsuario(req, res) {
    const {id} = req.body

    try {
        const usuarioDeletado = await usuarioServices.excluirUsuario({id})

        res.json({
            sucesso: true,
            mensagem: 'Usuário excluído com sucesso!',
            usuarioDeletado
        })

    } catch (error) {
        console.error('Erro ao excluir usuário na camadada CONTROLLER: ', error)
        res.status(500).json({ mensagem: 'Erro ao atualizar usuário na camada CONTROLLER!' })
    }
}

module.exports = {loginUsuario, cadastrarUsuario, editarUsuario, excluirUsuario}