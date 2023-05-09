import { Tareas } from "../models/Tareas.js";

export const getTareas = async (req, res) => {
  try {
    const tareas = await Tareas.findAll();
    res.json(tareas);
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};

export const getTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const tareas = await Tareas.findOne({
      where: { id },
      // el attributes sirve para que si queremos retornar solo un campo pues escribimos el campo que queremos
      // attributes:["nombre"]
    });
    if (tareas) {
      res.json(tareas);
    } else {
      res.status(404).json({
        message: "No existe el usuario",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};

export const createTareas = async (req, res) => {
  try {
    const { nombre, estado, usuarioId } = req.body;
    if (nombre && estado && usuarioId) {
      const newTarea = await Tareas.create({
        nombre,
        estado,
        usuarioId,
      });

      res.status(200).json(newTarea);
    } else {
      res.status(400).json({
        message: "Porfavor completa todos los campos",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};

export const updateTareas = async (req, res) => {
  try {
    const { id } = req.params;

    const tareas = await Tareas.findOne({
      where: {
        id,
      },
    });

    tareas.set(req.body);
    await tareas.save();

    res.json(tareas);
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};

export const deleteTareas = async (req, res) => {
  try {
    const { id } = req.params;
    const tareas = await Tareas.destroy({
      where: {
        id,
      },
    });

    res.json("eliminado correctamente");
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};
