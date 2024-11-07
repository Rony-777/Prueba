const db = require("../db/pg");

async function guardarDatos() {
    try {
        const response = await db.query('select * from datos');        
        console.log(response.rows);
        return response.rows
    } catch (error) {
        console.error('Error al almacenar los dataos', error);
        throw error;
    }
}

module.exports= guardarDatos;