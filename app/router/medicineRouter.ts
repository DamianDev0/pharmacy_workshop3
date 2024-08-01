import { Router } from 'express';
import { MedicineController } from '../controller/medicineController';

const medicineRouter = Router();

medicineRouter.get('/', MedicineController.getMedicines);
medicineRouter.post('/', MedicineController.createMedicine);
medicineRouter.delete('/:id', MedicineController.deleteMedicine);
medicineRouter.put('/:id', MedicineController.updateMedicine);

export default medicineRouter;
