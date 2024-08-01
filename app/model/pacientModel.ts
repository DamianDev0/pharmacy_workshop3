import { pool } from "../config/db";
import { Pacient } from "../interfaces/pharmacyInterface";

export class PacientModel {
  public static async getPacients(): Promise<Pacient[]> {
    const query = "SELECT * FROM patients";
    try {
      const [result] = await pool.query(query);
      return result as Pacient[];
    } catch (error) {
      console.error("Error getting patients:", error);
      throw new Error("Cannot get patients");
    }
  }

  public static async createPacient(pacient: Pacient): Promise<Pacient> {
    try {
      const [result] = await pool.query(
        ` INSERT INTO patients (name, age, medical_history)
          VALUES (?, ?, ?)
          `,[pacient.name,
             pacient.age,
            pacient.medical_history]
      );

      const insertId = (result as any).insertId;

      return {
        id: insertId,
        ...pacient,
      };
    } catch (error) {
      console.error("Error creating patients:", error);
      throw new Error("Cannot create patients");
    }
  }
}
