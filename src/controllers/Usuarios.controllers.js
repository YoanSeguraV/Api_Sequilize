import { Tareas } from "../models/Tareas.js";
import { Usuario } from "../models/Usuarios.js";

export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await Usuario.findOne({ where: { id } });
    if (usuarios) {
      res.json(usuarios);
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

export const createUsuarios = async (req, res) => {
  try {
    const { nombre, email, estado } = req.body;
    if (nombre && email && estado) {
      const newUsuario = await Usuario.create({
        nombre,
        email,
        estado,
      });

      res.status(200).json(newUsuario);
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

export const updateUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, estado } = req.body;

    const usuarios = await Usuario.findByPk(id);
    usuarios.nombre = nombre;
    usuarios.email = email;
    usuarios.estado = estado;

    await usuarios.save();

    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};

export const deleteUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await Usuario.destroy({
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

export const getUsuarioTareas = async (req, res) => {
  try {
    const { id } = req.params;
    const tareas = await Tareas.findAll({
      where: {
        usuarioId: id,
      },
    });
    res.json(tareas);
  } catch (error) {
    res.status(500).json({
      message: "error en el servidor",
    });
  }
};
