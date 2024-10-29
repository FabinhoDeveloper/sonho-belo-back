const {DataTypes} = require("sequelize")
const sequelize = require("../config/db_config")
const Encomenda = require("./encomendaModel")

const Sabor = sequelize.define("Sabor", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagemUrl: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
}, 
    {
        tableName: 'sabor',
        timestamps: false
    }
)


module.exports = Sabor