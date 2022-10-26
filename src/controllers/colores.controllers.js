import Color from "../models/color";

export const listarColores = (req, res) => {
  res.send("Esto es una prueba de la peticion GET de colores");
};
export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();
    res.status(201).json({
      mensaje: "El color fue añadido correctamnete",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al añadir el color",
    });
  }
};
