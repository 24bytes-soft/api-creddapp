import express from "express";
import morgan from "morgan";
import indexRuta from "../rutas/index.rutas";
import clienteRuta from "../rutas/cliente.rutas";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
const preRuta = "/api";

//se importan las rutas
app.use(preRuta, indexRuta);
app.use(preRuta, clienteRuta);

export default app;