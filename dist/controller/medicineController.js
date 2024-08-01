import { MedicineModel } from '../model/medicineModel.js';
export class MedicineController {
    static async getMedicines(_, res) {
        try {
            const medicines = await MedicineModel.getMedicines();
            res.status(200).json({
                message: 'fetched successfully', data: medicines
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error fetching medicines'
            });
        }
    }
    static async createMedicine(req, res) {
        try {
            const { name, quantity, expiration_date, price } = req.body;
            const newMedicine = { name, quantity, expiration_date, price };
            const createdMedicine = await MedicineModel.createMedicine(newMedicine);
            res.status(201).json({
                message: 'Medicine created successfully', data: createdMedicine
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Error creating medicine'
            });
        }
    }
    static async deleteMedicine(req, res) {
        try {
            const { id } = req.params;
            const medicine = { id: parseInt(id) };
            const medicineDelete = await MedicineModel.deleteMedicine(medicine);
            res.status(200).json({
                message: 'Medicine deleted successfully', data: medicineDelete
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting medicine' });
        }
    }
    static async updateMedicine(req, res) {
        try {
            const { id } = req.params;
            const { name, quantity, expiration_date, price } = req.body;
            if (!id || isNaN(parseInt(id))) {
                res.status(400).json({ message: 'ID inválido' });
                return;
            }
            const updatedMedicine = {
                id: parseInt(id),
                name,
                quantity,
                expiration_date,
                price
            };
            const updatedData = await MedicineModel.updateMedicine(updatedMedicine);
            res.status(200).json({
                message: 'Medicine updated successfully', data: updatedData
            });
        }
        catch (error) {
            console.error('Error al actualizar el medicamento:', error);
            res.status(500).json({ message: 'Error updating medicine' });
        }
    }
}
