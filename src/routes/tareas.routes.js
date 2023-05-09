import { Router } from "express";
import { getTareas ,createTareas,deleteTareas,getTarea,updateTareas} from "../controllers/Tareas.controllers.js";

const router = Router();

router.get("/tareas", getTareas);
router.get("/tareas/:id", getTarea);
router.post("/tareas", createTareas);
router.put("/tareas/:id", updateTareas);
router.delete("/tareas/:id", deleteTareas);

export default router;
