import express from "express";
import { AutoresController } from '../controllers/autoresController.js'

const router = express.Router();

router
    .get("/autores", AutoresController.listarAutores)
    .get("/autores/autor=:id", AutoresController.listarAutorPorId)
    .post("/autores", AutoresController.cadastrarAutor)
    .put("/autores/autor=:id", AutoresController.atualizarAutor)
    .delete("/autores/autor=:id", AutoresController.excluirAutor)

export default router;