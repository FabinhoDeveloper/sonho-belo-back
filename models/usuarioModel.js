const {DataTypes} = require("sequelize")
const sequelize = require("../config/db_config")

const Usuario = sequelize.define("Usuario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
}, 
    {
        tableName: 'usuario',
        timestamps: false
    }
)

module.exports = Usuario