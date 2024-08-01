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
            const newMedicine = { name, quantity, expiration_date, price };
            const createdMedicine = await MedicineModel.createMedicine(newMedicine);
            res.status(201).json({ message: 'Medicine created successfully', data: createdMedicine });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error creating medicine' });
        }
    }
    static async deleteMedicine(req, res) {
        try {
            const { id } = req.params;
            const medicine = { id: parseInt(id) };
            await MedicineModel.deleteMedicine(medicine);
            res.status(200).json({ message: 'Medicine deleted successfully' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error deleting medicine' });
        }
    }
    static async updateMedicine(req, res) {
        try {
            const { id } = req.params; // Obtener el id de los parámetros de la solicitud
            const { name, quantity, expiration_date, price } = req.body; // Obtener los datos del cuerpo de la solicitud
            // Verificar si el id es válido
            if (!id || isNaN(parseInt(id))) {
                res.status(400).json({ message: 'ID inválido' });
                return;
            }
            // Crear el objeto con los datos a actualizar
            const updatedMedicine = {
                id: parseInt(id), // Asegurarse de que el id es un número entero
                name,
                quantity,
                expiration_date,
                price
            };
            // Llamar al método de actualización del modelo
            const updatedData = await MedicineModel.updateMedicine(updatedMedicine);
            // Enviar una respuesta con el medicamento actualizado
            res.status(200).json({ message: 'Medicine updated successfully', data: updatedData });
        }
        catch (error) {
            console.error('Error al actualizar el medicamento:', error);
            res.status(500).json({ message: 'Error updating medicine' });
        }
    }
}
