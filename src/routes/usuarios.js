import { Router } from "express";
import { createUsuarios, deleteUsuarios, getUsuario, getUsuarios, updateUsuarios,getUsuarioTareas } from "../controllers/Usuarios.controllers.js";

const router = Router();

router.get("/admin", getUsuarios);
router.get("/admin/:id", getUsuario);
router.post("/admin", createUsuarios);
router.put("/admin/:id", updateUsuarios);
router.delete("/admin/:id", deleteUsuarios);
router.get("/admin/:id/tareas", getUsuarioTareas);

export default router;
