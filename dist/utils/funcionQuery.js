import { pool } from '../config/db.js';
export async function foundMedicine(id) {
    try {
        const [rows] = await pool.query('SELECT id FROM medicines WHERE id = ?', [id]);
        //
        const [medicine] = rows;
        if (!medicine) {
            return undefined;
        }
        return medicine;
    }
    catch (error) {
        console.error('Error finding medicine:', error);
        throw new Error('Error finding medicine');
    }
}
