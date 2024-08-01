import { Request, Response } from "express";
import { Pacient } from "../interfaces/pharmacyInterface";
import { PacientModel } from "../model/pacientModel";

export class PacientController{
    public static async getPacients(_: Request, res: Response): Promise<void>{
        try{
            const pacientes = await PacientModel.getPacients();
            res.status(200).json(pacientes);

        }catch(error){
            console.error(error);
            res.status(500).json({
                message: 'Cannot get pacientes'
            })
         
        }
    }

    public static async createPacients(req: Request, res: Response): Promise<void>{
        try {
            const {name,age,medical_history} = req.body

            const newPacient : Omit<Pacient, 'id'> = {name, age,medical_history}
            const pacient = await PacientModel.createPacient(newPacient);

            res.status(201).json({
                message:'Pacient created successfully', data:pacient});
            
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Cannot create pacient'
            })
           
            
        }
    }
}