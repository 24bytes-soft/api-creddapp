import { Schema, model } from "mongoose";

const coleccion_prueba = new Schema({
    nombre: String,
    apellido: String
}, {
    timestamps: true
});

export default model("clienteModelo", coleccion_prueba);