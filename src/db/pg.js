const { Client } = require('pg');


const connectionData = {
  user: 'postgres',
  host: 'localhost',
  database: 'aire',
  password: '123',
  port: '5432',
}

const cliente = new Client(connectionData);
cliente.connect();

module.exports = cliente;