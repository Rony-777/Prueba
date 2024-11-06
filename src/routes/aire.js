const router = require("express").Router();
const guardarDatos= require("../controllers/aire")

router.get("/", (req, res)=>{
   const co2 =req.query.co2;
   const temp =req.query.temp;      
   guardarDatos(co2,temp);
   console.log(`la temperatura es : ${temp} y la cantidad de co2 es : ${co2}`);
   res.send(`la temperatura es : ${temp} y la cantidad de co2 es : ${co2}`);
});

module.exports = router;