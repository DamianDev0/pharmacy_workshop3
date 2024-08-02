import { Response,Request } from "express";
import { PrescriptionsModel } from "../model/prescriptionModel";
import { Prescriptions } from "../interfaces/pharmacyInterface";


export class PrescriptionController {
    public static async getPrescriptions(_: Request, res: Response): Promise<void> {
        try {
           
            const prescriptions = await PrescriptionsModel.getPrescriptions();
            
            res.status(200).json(prescriptions);
        } catch (error) {
            throw new Error('An error occurred in the PrescriptionController')
        }
    }
    
    public static async createPrescription(req: Request, res: Response): Promise<void> {
        try {
            const { medicine_id, dosage, frequency, duration } = req.body;
    
  
            const newPrescription: Omit<Prescriptions, 'id'> = { medicine_id, dosage, frequency, duration };
    
      
            const createdPrescription = await PrescriptionsModel.createPrescription(newPrescription);

            res.status(201).json({
                message: 'Prescription created successfully',
                data: createdPrescription
            });
    
        } catch (error) {
           throw new Error('An error occurred in the PrescriptionController')
        }
}
}