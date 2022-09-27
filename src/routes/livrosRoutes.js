import express from "express";
import { LivrosController } from '../controllers/livrosController.js';

const router = express.Router();

router
    .get("/livros", LivrosController.listarLivros)
    .get("/livros/livro=:id", LivrosController.listarLivroPorId)
    .get("/livros/busca", LivrosController.listarLivroPorEditora)
    .post("/livros", LivrosController.cadastrarLivro)
    .put("/livros/livro=:id", LivrosController.atualizarLivro)
    .delete("/livros/livro=:id", LivrosController.excluirLivro)

export default router;