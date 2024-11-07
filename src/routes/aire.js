const router = require("express").Router();
const { response } = require("express");
const guardarDatos= require("../controllers/aire")

router.get("/", async (req, res)=>{
   const response = await guardarDatos();
   res.json(response);
});

module.exports = router;