import motoristas from "../model/Motorista.js"

class MotoristaController {
    static listarTodos = async (req, res) => {
        await motoristas.find()
            .then(result =>{
                res.status(200).json(result)
            }).catch (err => {
                res.status(500).send({message: `Erro ao buscar todos: ${err}`})
            })
    }

    static listarPorId = async (req, res) => {
        const id = req.params.id

        motoristas.findById(id)
            .then(reposta => {
                res.status(200).json(reposta)
            }).catch(err => {
                res.status(404).send({message: `ID não localizado: ${err}`})
            })
    }

    static cadastrar = (req, res) => {
        const motorista = new motoristas(req.body)

        motorista.save().then(result => {
            res.status(201).send({message: `Cadastrado com sucesso!`})
        }).catch(err => {
            res.status(400).send({message: `Falha ao tentar cadastrar: ${err}`})
        })
    }

    static atualizar = (req, res) => {
        const id = req.params.id

        motoristas.findByIdAndUpdate(id, {$set: req.body}).then(result => {
                res.status(200).send({message: `Atualizado com sucesso`})
            }).catch(err => {
                res.status(500).send({message: `Erro ao tentar atualizar: ${err}`})
            })
    }

    static excluir = (req, res) => {
        const id = req.params.id

        motoristas.findByIdAndDelete(id)
            .then(resposta => {
                res.status(200).send({message: `Excluído com sucesso.`})
            }).catch(err => {
                res.status(400).send({message: `Não foi possível excluir o motorista.`})
            })
    }
}

export default MotoristaController