import { NextFunction, Request, Response } from "express";

import { doctorService } from "../services/doctor.service";
import { IDoctor } from "../types/body.types";

class DoctorController {
  public async createDoctor(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IDoctor>> {
    try {
      const body = req.body as IDoctor;
      const doctor = await doctorService.createDoctor(body);
      return res.json(doctor);
    } catch (e) {
      next(e);
    }
  }

  public async getDoctors(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IDoctor[]>> {
    try {
      const doctors = await doctorService.getDoctor();
      return res.json(doctors);
    } catch (e) {
      next(e);
    }
  }

  public async deleteDoctor(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<void>> {
    try {
      await doctorService.deleteOne(req.body.name);
      return res.status(200);
    } catch (e) {
      next(e);
    }
  }
}

export const doctorController = new DoctorController();
