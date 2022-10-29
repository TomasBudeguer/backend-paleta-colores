import Color from "../models/color";

export const listarColores = async (req, res) => {
  try {
    const listaColores = await Color.find();
    res.status(200).json(listaColores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los colores",
    });
  }
};

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();
    res.status(201).json({
      mensaje: "El color fue añadido correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al añadir el color",
    });
  }
};

export const obtenerColor = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);
    res.status(200).json(colorBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al obtener el color solicitado",
    });
  }
};

export const editarColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El color fue modificado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al editar el color solicitado",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El color fue eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al borrar el color solicitado",
    });
  }
};
