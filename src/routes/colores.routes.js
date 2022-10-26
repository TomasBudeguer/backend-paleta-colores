import { Router } from "express";
import { crearColor, listarColores } from "../controllers/colores.controllers";

const router = Router();

router.route("/colores").get(listarColores).post(crearColor);
router.route("/colores/:id").get().put().delete();

export default router;
