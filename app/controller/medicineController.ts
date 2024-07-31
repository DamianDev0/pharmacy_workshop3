import { Request, Response } from 'express';
import { MedicineModel } from '../model/medicineModel';

export class MedicineController {
  public static async getMedicines(req: Request, res: Response): Promise<void> {
    try {
      const medicine = await MedicineModel.getMedicines();
      res.status(200).json(medicine);
    } catch (error) {
      console.error(error);
    }
  }
}
