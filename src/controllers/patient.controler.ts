import { NextFunction, Request, Response } from "express";

import { patientService } from "../services/patient.service";
import { IPatient } from "../types/body.types";

class PatientController {
  public async createPatient(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IPatient>> {
    try {
      const body = req.body as IPatient;
      const patient = await patientService.createPatient(body);
      return res.json(patient);
    } catch (e) {
      next(e);
    }
  }

  public async deletePatient(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<void>> {
    try {
      await patientService.deleteOne(req.body.name);
      return res.status(200);
    } catch (e) {
      next(e);
    }
  }

  public async getPatients(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IPatient[]>> {
    try {
      const patients = await patientService.getPatients();

      return res.json(patients);
    } catch (e) {
      next(e);
    }
  }
}

export const patientController = new PatientController();
