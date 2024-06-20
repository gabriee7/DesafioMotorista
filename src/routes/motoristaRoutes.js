import express from "express";
import MotoristaController from "../controller/MotoristaController.js";

const router = express.Router()

router
    .get("/motorista", MotoristaController.listarTodos)
    .get("/motorista/:id", MotoristaController.listarPorId)
    .post("/motorista", MotoristaController.cadastrar)
    .put("/motorista/:id", MotoristaController.atualizar)
    .delete("/motorista/:id", MotoristaController.excluir)

export default router