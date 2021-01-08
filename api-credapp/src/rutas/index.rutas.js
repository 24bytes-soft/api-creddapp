import { Router } from "express";
import * as indexCtr from "../contoladores/index.controlador";
const rutas = Router();

rutas.get("/", indexCtr.index);

export default rutas;