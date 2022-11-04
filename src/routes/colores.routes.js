import { Router } from "express";
import { check } from "express-validator";
import {
  borrarColor,
  crearColor,
  editarColor,
  listarColores,
  obtenerColor,
} from "../controllers/colores.controllers";

const router = Router();

router
  .route("/colores")
  .get(listarColores)
  .post(
    [
      check("color")
        .notEmpty()
        .withMessage("El campo del color es un dato obligatorio")
        .matches(
          /^#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,){3}[\d]+\)|hsl\(\s*\d+\s*(\s*\s*\d+){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*){2}\s*\s*[\d]+\)$/
        )
        .withMessage("Ingrese un color en formato hex, rgb, rgba, hsl o hsla"),
    ],
    crearColor
  );
router
  .route("/colores/:id")
  .get(obtenerColor)
  .put(
    [
      check("color")
        .notEmpty()
        .withMessage("El campo del color es un dato obligatorio")
        .matches(
          /^#[a-zA-Z0-9]{6}|rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)|rgba\((\s*\d+\s*,){3}[\d]+\)|hsl\(\s*\d+\s*(\s*\s*\d+){2}\)|hsla\(\s*\d+(\s*,\s*\d+\s*){2}\s*\s*[\d]+\)$/
        )
        .withMessage("Ingrese un color en formato hex, rgb, rgba, hsl o hsla"),
    ],
    editarColor
  )
  .delete(borrarColor);

export default router;
