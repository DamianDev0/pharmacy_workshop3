import { pool } from '../config/db';
import { Medicine } from '../interfaces/medicineInterface';

export class MedicineModel {
  public static async getMedicines(): Promise<Medicine[]> {
    const query = 'SELECT * FROM medicines';
    try {
      const [result] = await pool.query(query);
      return result as Medicine[];
    } catch (error) {
      throw new Error('Error cannot get medication');
    }
  }
  // Add a new medicine

  public static async createMedicine(medicine: Medicine): Promise<Medicine> {
    try {
        // Ejecutar la consulta de inserción
        const result = await pool.query(
            `INSERT INTO medicines (name, quantity, expiration_date, price) 
            VALUES (?, ?, ?, ?)`,
            [medicine.name, medicine.quantity, medicine.expiration_date, medicine.price]
        );

        // // Obtener el ID del nuevo registro
        // const newMedicineId = result.insertId;

        // Consultar el nuevo registro insertado
        // const [newMedicine] = await pool.query(
        //     'SELECT * FROM medicines WHERE id = ?',
        //     [newMedicineId]
        // );

        // Retornar el nuevo medicamento
        // return newMedicine:unknow as Medicine;

    } catch (error) {
        throw new Error('Error cannot create medication: ' 
        );
    }
}

  }

