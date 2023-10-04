import { NextFunction, Request, Response } from "express";

import { appointmentService } from "../services/appointment.service";
import { IAppointmetObj } from "../types/body.types";

class AppointmentController {
  public async appointment(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body as IAppointmetObj;
      const allowed = await appointmentService.appointment(body);
      return res.json(allowed);
    } catch (e) {
      next(e);
    }
  }
}

export const appointmentController = new AppointmentController();
