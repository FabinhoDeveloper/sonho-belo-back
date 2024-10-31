const Sabor = require("../saborModel")
const Encomenda = require("../encomendaModel")

Sabor.belongsToMany(Encomenda, {
    through: 'relacao_encomenda_sabores',
    as: 'encomendas',
    foreignKey: 'saborId',
    otherKey: 'encomendaId'
});

Encomenda.belongsToMany(Sabor, {
    through: 'relacao_encomenda_sabores',
    as: 'sabores',
    foreignKey: 'encomendaId',
    otherKey: 'saborId'
})

module.exports = {Encomenda, Sabor}