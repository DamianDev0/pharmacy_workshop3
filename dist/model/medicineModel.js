import { pool } from "../config/db.js";
export class MedicineModel {
    static async getMedicines() {
        const query = "SELECT * FROM medicines";
        try {
            const [result] = await pool.query(query);
            return result;
        }
        catch (error) {
            console.error("Error fetching medicines:", error);
            throw new Error("Unable to get medicines");
        }
    }
    static async createMedicine(medicine) {
        try {
            const [result] = await pool.query(`INSERT INTO medicines (name, quantity, expiration_date, price) 
            VALUES (?, ?, ?, ?)`, [
                medicine.name,
                medicine.quantity,
                medicine.expiration_date,
                medicine.price,
            ]);
            const insertId = result.insertId;
            // devuelve medicine con el id de la base de datos
            return {
                ...medicine,
                id: insertId,
            };
        }
        catch (error) {
            console.error("Error creating the medicine:", error);
            throw new Error("Unable to create the medicine");
        }
    }
    static async deleteMedicine(medicine) {
        try {
            if (!medicine.id) {
                throw new Error("Medicine ID not provided");
            }
            await pool.query("DELETE FROM medicines WHERE id = ?", [medicine.id]);
        }
        catch (error) {
            console.error("Error deleting the medicine:", error);
            throw new Error("Unable to delete the medicine");
        }
    }
    static async updateMedicine(medicine) {
        try {
            if (!medicine.id) {
                throw new Error("Medicine ID not provided");
            }
            const [result] = await pool.query(`UPDATE medicines 
         SET name = ?, quantity = ?, expiration_date = ?, price = ? 
         WHERE id = ?`, [
                medicine.name,
                medicine.quantity,
                medicine.expiration_date,
                medicine.price,
                medicine.id,
            ]);
            if (result.affectedRows === 0) {
                throw new Error("Medicine not found for update");
            }
            const [rows] = await pool.query(`SELECT * FROM medicines WHERE id = ?`, [
                medicine.id,
            ]);
            const medicineRows = rows;
            return medicineRows[0];
        }
        catch (error) {
            console.error("Error updating the medicine:", error);
            throw new Error("Unable to update the medicine");
        }
    }
}
