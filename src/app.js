import express from "express";
import db from "../config/dbConnect.js";

db.on('error', console.log.bind(console, "Erro conexão: "))
db.once('open', () => {
    console.log("Conexão bem sucedida.")
})

const app = express();
app.use(express.json())

export default app;