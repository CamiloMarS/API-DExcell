(function Queryes() {
  "use strict";

  /** Consultar a todos los empleados */
  const allEmployees = "select * from Empleados;";

  /** Consultar a los empleados solamente activos */
  const employeesActives =
    "SELECT * FROM Empleados WHERE Empleados.activo = true;";

  /** Consultar a los empledos que estan inactivos  */
  const employeesInactives =
    "SELECT * FROM Empleados WHERE Empleados.activo = false;";

  //Exportar las cadenas de consulta
  module.exports = {
    allEmployees,
    employeesActives,
    employeesInactives
  };
})();
