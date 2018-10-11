var express = require("express");
var router = express.Router();
const { connToDB, disconnectDB } = require("../connection"); //cadena de conexion con Postgres
const { employeesActives, employeesInactives } = require("../querys");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Hello" });
});

//Crear las rutas del servicio
router.get("/empleados", (req, res) => {
  let conn = connToDB();
  conn.query(employeesInactives, (err, result) => {
    console.log(result.rows);
    res.render("index", { data: JSON.stringify(result.rows) });
    disconnectDB(conn);
  });
});

module.exports = router;
