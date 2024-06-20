import express from "express";
import MotoristaController from "../controller/MotoristaController.js";

const router = express.Router()

router
    .get("/motoristas", MotoristaController.listarTodos)
    .get("/motoristas/:id", MotoristaController.listarPorId)
    .post("/motoristas", MotoristaController.cadastrar)
    .put("/motoristas/:id", MotoristaController.atualizar)
    .delete("/motoristas/:id", MotoristaController.excluir)

export default router