import { PrescriptionsModel } from "../model/prescriptionModel.js";
export class PrescriptionController {
    static async getPrescriptions(_, res) {
        try {
            const prescriptions = await PrescriptionsModel.getPrescriptions();
            res.status(200).json(prescriptions);
        }
        catch (error) {
            throw new Error('An error occurred in the PrescriptionController');
        }
    }
    static async createPrescription(req, res) {
        try {
            const { medicine_id, dosage, frequency, duration } = req.body;
            const newPrescription = { medicine_id, dosage, frequency, duration };
            const createdPrescription = await PrescriptionsModel.createPrescription(newPrescription);
            res.status(201).json({
                message: 'Prescription created successfully',
                data: createdPrescription
            });
        }
        catch (error) {
            throw new Error('An error occurred in the PrescriptionController');
        }
    }
}
