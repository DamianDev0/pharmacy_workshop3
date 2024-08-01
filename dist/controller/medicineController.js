import { MedicineModel } from '../model/medicineModel.js';
export class MedicineController {
    static async getMedicines(req, res) {
        try {
            const medicines = await MedicineModel.getMedicines();
            res.status(200).json(medicines);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching medicines' });
        }
    }
    static async createMedicine(req, res) {
        try {
            const { name, quantity, expiration_date, price } = req.body;
            // Create a medicine object excluding `id` since it will be generated
            const newMedicine = { name, quantity, expiration_date, price };
            const createdMedicine = await MedicineModel.createMedicine(newMedicine);
            res.status(201).json({ message: 'Medicine created successfully', data: createdMedicine });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating medicine' });
        }
    }
}
