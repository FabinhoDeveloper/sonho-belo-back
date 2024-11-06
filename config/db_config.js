require("dotenv").config()
const {Sequelize} = require("sequelize")

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASS;
const host = process.env.DB_HOST;


const sequelize = new Sequelize(db_name, db_user, db_password, {
    host: host,
    dialect: "postgres",
    dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false }
    }
})

module.exports = sequelize;