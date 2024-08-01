import { PacientModel } from "../model/pacientModel.js";
export class PacientController {
    static async getPacients(_, res) {
        try {
            const pacientes = await PacientModel.getPacients();
            res.status(200).json(pacientes);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Cannot get pacientes'
            });
        }
    }
    static async createPacients(req, res) {
        try {
            const { name, age, medical_history } = req.body;
            const newPacient = { name, age, medical_history };
            const pacient = await PacientModel.createPacient(newPacient);
            res.status(201).json({
                message: 'Pacient created successfully', data: pacient
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Cannot create pacient'
            });
        }
    }
}
