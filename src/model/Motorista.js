import mongoose from "mongoose";

const motoristaSchema = new mongoose.Schema(
    {
        nome: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: Number, required: true},
        numeroCNH: {type: Number, required: true}
    }
)

const motoristas = mongoose.model("motoristas", motoristaSchema)

export default motoristas