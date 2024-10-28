const {DataTypes} = require("sequelize")
const sequelize = require("../config/db_config")
const Sabor = require("./saborModel")

const Encomenda = sequelize.define("Encomenda", {
    nome_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_retirada: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora_retirada: {
        type: DataTypes.TIME,
        allowNull: false
    }, 
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    para_entrega: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    endereco_entrega: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, 
    {
        tableName: 'encomenda',
        timestamps: false
    }
)

module.exports = Encomenda