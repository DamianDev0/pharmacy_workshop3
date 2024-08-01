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


  public static async createMedicine(medicine: Medicine): Promise<Medicine> {
    try {
     
        const [result] = await pool.query(
            `INSERT INTO medicines (name, quantity, expiration_date, price) 
            VALUES (?, ?, ?, ?)`,
            [medicine.name, medicine.quantity, medicine.expiration_date, medicine.price]
        );

        const insertId = (result as any).insertId; // Adjust based on the result type

  
        return {
            ...medicine,
            id: insertId
        };
    } catch (error) {
       
        console.error('Error al crear el medicamento:', error);
        throw new Error('No se pudo crear el medicamento');
    }
}

}
