import { NextFunction, Request, Response } from "express";

import { appointmentService } from "../services/appointment.service";
import { IAppointmet } from "../types/body.types";

class AppointmentController {
  public async createAppointment(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IAppointmet>> {
    try {
      const body = req.body as IAppointmet;
      const appointment = await appointmentService.createAppointment(body);
      return res.json(appointment);
    } catch (e) {
      next(e);
    }
  }

  public async getAppointments(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IAppointmet[]>> {
    try {
      const appointment = await appointmentService.getAppointments();
      return res.json(appointment);
    } catch (e) {
      next(e);
    }
  }

  public async deleteAppointment(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<void>> {
    try {
      await appointmentService.deleteOne(req.body.name);
      return res.status(200);
    } catch (e) {
      next(e);
    }
  }
}

export const appointmentController = new AppointmentController();
