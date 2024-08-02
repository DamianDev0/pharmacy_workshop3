import { pool } from "../config/db";
import { Prescriptions } from "../interfaces/pharmacyInterface";
import { foundMedicine } from "../utils/funcionQuery";

export class PrescriptionsModel {
  public static async getPrescriptions(): Promise<Prescriptions[]> {
    const query = "SELECT * FROM prescriptions";
    try {
      const [result] = await pool.query(query);
      return result as Prescriptions[];
    } catch (error) {
      console.error("Error fetching prescriptions:", error);
      throw new Error("Unable to get prescriptions");
    }
  }

  public static async createPrescription(
    prescription: Prescriptions
  ): Promise<Prescriptions> {
    try {
      const foundMedicineId = await foundMedicine(prescription.medicine_id);
      if (!foundMedicineId) {
        throw new Error("Medicine not found");
      }
      const [result] = await pool.query(
        ` INSERT INTO prescriptions (medicine_id, dosage, frequency,duration)
                  VALUES (?,?,?,?)
                  `,
        [
          prescription.medicine_id,
          prescription.dosage,
          prescription.frequency,
          prescription.duration,
        ]
      );

      const insertId = (result as any).insertId;
      return { ...prescription, id: insertId };
    } catch (error) {
      console.error("Error creating prescription:", error);
      throw new Error("Unable to create prescription");
    }
  }
}
