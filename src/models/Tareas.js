import { DataTypes } from "sequelize";
import { db } from "../db/database.js";

export const Tareas = db.define("tareas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
