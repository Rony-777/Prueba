const express = require('express');
const app = express();
const port = 3000;


app.use("/api/aire", require("./routes/aire"));

app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde Express!');
});




app.listen(port,  () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
