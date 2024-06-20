import mongoose from "mongoose";

const motoristaSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: String, required: true},
        numeroCNH: {type: String, required: true}
    }
)

const motoristas = mongoose.model("motoristas", motoristaSchema)

export default motoristas