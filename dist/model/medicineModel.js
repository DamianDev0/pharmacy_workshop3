import { pool } from '../config/db.js';
export class MedicineModel {
    static async getMedicines() {
        const query = 'SELECT * FROM medicines';
        try {
            const [result] = await pool.query(query);
            return result;
        }
        catch (error) {
            throw new Error('Error cannot get medication');
        }
    }
    static async createMedicine(medicine) {
        try {
            const [result] = await pool.query(`INSERT INTO medicines (name, quantity, expiration_date, price) 
            VALUES (?, ?, ?, ?)`, [medicine.name, medicine.quantity, medicine.expiration_date, medicine.price]);
            const insertId = result.insertId; // Adjust based on the result type
            return {
                ...medicine,
                id: insertId
            };
        }
        catch (error) {
            console.error('Error al crear el medicamento:', error);
            throw new Error('No se pudo crear el medicamento');
        }
    }
}
