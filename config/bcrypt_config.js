const bcrypt = require("bcrypt")

const gerarSenhaHash = async (password) => {
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    return hashedPassword
}

const comparaSenha = async (password, hashedPassword) => {
    const senhaCorreta = await bcrypt.compare(password, hashedPassword)

    return senhaCorreta
}


module.exports = {gerarSenhaHash, comparaSenha}