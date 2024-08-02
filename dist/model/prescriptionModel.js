import { pool } from "../config/db.js";
import { foundMedicine } from "../utils/funcionQuery.js";
export class PrescriptionsModel {
    static async getPrescriptions() {
        const query = "SELECT * FROM prescriptions";
        try {
            const [result] = await pool.query(query);
            return result;
        }
        catch (error) {
            console.error("Error fetching prescriptions:", error);
            throw new Error("Unable to get prescriptions");
        }
    }
    static async createPrescription(prescription) {
        try {
            const foundMedicineId = await foundMedicine(prescription.medicine_id);
            if (!foundMedicineId) {
                throw new Error("Medicine not found");
            }
            const [result] = await pool.query(` INSERT INTO prescriptions (medicine_id, dosage, frequency,duration)
                  VALUES (?,?,?,?)
                  `, [
                prescription.medicine_id,
                prescription.dosage,
                prescription.frequency,
                prescription.duration,
            ]);
            const insertId = result.insertId;
            return { ...prescription, id: insertId };
        }
        catch (error) {
            console.error("Error creating prescription:", error);
            throw new Error("Unable to create prescription");
        }
    }
}
