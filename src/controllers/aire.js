const db = require("../db/pg");

async function guardarDatos(co2, temp) {
    try {
        const response = await db.query('INSERT INTO datos (co2, temp) VALUES ($1, $2)', [ co2, temp]);        
    } catch (error) {
        console.error('Error al almacenar los dataos', error);
        throw error;
    }
}

module.exports= guardarDatos;