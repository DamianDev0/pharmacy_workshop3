import { Router } from "express";
import { PacientController } from "../controller/pacientController";


const patientRouter = Router()

patientRouter.get('/',PacientController.getPacients)
patientRouter.post('/',PacientController.createPacients)


export default patientRouter