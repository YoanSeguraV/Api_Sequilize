import express from "express";
const PORT = process.env.PORT || 3000;
import cors from "cors";
import usuarios from "./routes/usuarios.js";
import tareas from "./routes/tareas.routes.js";
import { db } from "./db/database.js";
import "./models/Tareas.js";
const app = express();

const conexion = async () => {
  try {
    await db.authenticate();
    await db.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
conexion();

app.use(express.json());
app.use(cors());
app.use(usuarios);
app.use(tareas);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
