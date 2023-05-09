import Sequelize from "sequelize";

export const db = new Sequelize("usuariosdb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
