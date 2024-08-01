import { Request, Response } from 'express';
import { MedicineModel } from '../model/medicineModel';
import { Medicine } from '../interfaces/medicineInterface';

export class MedicineController {
  public static async getMedicines(req: Request, res: Response): Promise<void> {
    try {
      const medicines = await MedicineModel.getMedicines();
      res.status(200).json(medicines);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching medicines' });
    }
  }

  public static async createMedicine(req: Request, res: Response): Promise<void> {
    try {
      const { name, quantity, expiration_date, price } = req.body;
      
      const newMedicine: Omit<Medicine, 'id'> = { name, quantity, expiration_date, price };
      const createdMedicine = await MedicineModel.createMedicine(newMedicine);
      res.status(201).json({ message: 'Medicine created successfully', data: createdMedicine });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error creating medicine' });
    }
  }
  
}
