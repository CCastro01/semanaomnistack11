const knex = require('knex');
const configuration = require('../../knexfile');
const conection = knex(configuration.development);//passando a conexão de desenvolvimento

module.exports = conection;