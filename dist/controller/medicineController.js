import { MedicineModel } from '../model/medicineModel.js';
export class MedicineController {
    static async obtenerMedicamentos(req, res) {
        try {
            const medicamentos = await MedicineModel.obtenerMedicamentos();
            res.status(200).json(medicamentos);
        }
        catch (error) {
            console.error(error);
        }
    }
}
