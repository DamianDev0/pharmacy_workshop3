import { pool } from '../config/db.js';
export class MedicineModel {
    static async obtenerMedicamentos() {
        const query = 'SELECT * FROM medicines';
        try {
            const [rows] = await pool.query(query);
            return rows;
        }
        catch (error) {
            throw new Error('Error al obtener medicamentos');
        }
    }
}
