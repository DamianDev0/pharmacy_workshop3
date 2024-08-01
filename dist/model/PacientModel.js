import { pool } from "../config/db.js";
export class PacientModel {
    static async getPacients() {
        const query = "SELECT * FROM patients";
        try {
            const [result] = await pool.query(query);
            return result;
        }
        catch (error) {
            console.error("Error getting patients:", error);
            throw new Error("Cannot get patients");
        }
    }
    static async createPacient(pacient) {
        try {
            const [result] = await pool.query(` INSERT INTO patients (name, age, medical_history)
          VALUES (?, ?, ?)
          `, [pacient.name,
                pacient.age,
                pacient.medical_history]);
            const insertId = result.insertId;
            return {
                id: insertId,
                ...pacient,
            };
        }
        catch (error) {
            console.error("Error creating patients:", error);
            throw new Error("Cannot create patients");
        }
    }
}
