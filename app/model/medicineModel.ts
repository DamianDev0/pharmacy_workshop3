import { Medicine } from "./../interfaces/medicineInterface";
import { pool } from "../config/db";

export class MedicineModel {
  public static async getMedicines(): Promise<Medicine[]> {
    const query = "SELECT * FROM medicines";
    try {
      const [result] = await pool.query(query);
      return result as Medicine[];
    } catch (error) {
      throw new Error("Error cannot get medication");
    }
  }

  public static async createMedicine(medicine: Medicine): Promise<Medicine> {
    try {
      const [result] = await pool.query(
        `INSERT INTO medicines (name, quantity, expiration_date, price) 
            VALUES (?, ?, ?, ?)`,
        [
          medicine.name,
          medicine.quantity,
          medicine.expiration_date,
          medicine.price,
        ]
      );

      const insertId = (result as any).insertId; // Adjust based on the result type

      return {
        ...medicine,
        id: insertId,
      };
    } catch (error) {
      console.error("Error al crear el medicamento:", error);
      throw new Error("No se pudo crear el medicamento");
    }
  }

  public static async deleteMedicine(medicine: Medicine): Promise<void> {
    try {
      if (!medicine.id) {
        throw new Error("ID del medicamento no proporcionado");
      }

      await pool.query("DELETE FROM medicines WHERE id = ?", [medicine.id]);

    } catch (error) {
      console.error("Error al borrar el medicamento:", error);
      throw new Error("No se pudo borrar el medicamento");
    }
  }

  public static async updateMedicine(medicine: Medicine): Promise<Medicine> {
    try {
      if (!medicine.id) {
        throw new Error('ID del medicamento no proporcionado');
      }
  
      // Ejecuta la consulta de actualización
      const [result] = await pool.query(
        `UPDATE medicines 
         SET name = ?, quantity = ?, expiration_date = ?, price = ? 
         WHERE id = ?`,
        [
          medicine.name,
          medicine.quantity,
          medicine.expiration_date,
          medicine.price,
          medicine.id,
        ]
      );
  
      // Verifica si se actualizó alguna fila
      if ((result as any).affectedRows === 0) {
        throw new Error('Medicamento no encontrado para actualizar');
      }
  
      // Recupera el medicamento actualizado para devolverlo
      const [rows] = await pool.query(
        `SELECT * FROM medicines WHERE id = ?`,
        [medicine.id]
      );
  
      // Cast the rows to Medicine array
      const medicineRows = rows as Medicine[];
  
      if (medicineRows.length === 0) {
        throw new Error('Medicamento no encontrado después de la actualización');
      }
  
      return medicineRows[0];
  
    } catch (error) {
      console.error('Error al actualizar el medicamento:', error);
      throw new Error('No se pudo actualizar el medicamento');
    }
  }
}
