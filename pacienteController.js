const pacienteService = require('../services/pacienteService');

const criarPaciente = async (req,res) => {
    try {
        const {nome, cpf, dataNascimento, telefone, email} = req.body ;
        if (!nome || !cpf || !dataNascimento || !telefone || !email ) {
            return res.status(201).json({message:'todos os campos são obrigatorios.'});
        }
        const paciente = await pacienteService.criarPaciente(req.body);
        res.status(201).json({message:'Paciente cadastrado com sucesso.'});
    } catch (error) {
        res.status(400).json({eror: error.message});
    }
};


module.exports = {criarPaciente, listaPacientes};
