const { Client } = require('pg');


const cliente = new Client({
  connectionString: 'postgresql://rony:Uii5GHCALrfIDEwx3gB8jxRQwvP0NKQF@dpg-csm2rjdumphs73chpvc0-a/calidad_aire_9xhy',
  ssl: {
    rejectUnauthorized: false
  }
});


cliente.connect()
  .then(() => console.log("Conexión exitosa a la base de datos en Render"))
  .catch(err => console.error("Error de conexión a la base de datos:", err));

module.exports = cliente;