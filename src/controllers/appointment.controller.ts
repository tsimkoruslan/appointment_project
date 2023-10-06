import { NextFunction, Request, Response } from "express";

import { appointmentService } from "../services/appointment.service";
import { IAppointmet, IDoctor, IPatient } from "../types/body.types";

class AppointmentController {
  public async createDoctor(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IDoctor>> {
    try {
      const body = req.body as IDoctor;
      const doctor = await appointmentService.createDoctor(body);
      return res.json(doctor);
    } catch (e) {
      next(e);
    }
  }

  public async createPatient(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IPatient>> {
    try {
      const body = req.body as IPatient;
      const patient = await appointmentService.createPatient(body);
      return res.json(patient);
    } catch (e) {
      next(e);
    }
  }

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

  public async getPatients(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response<IPatient[]>> {
    try {
      const patients = await appointmentService.getPatients();
      return res.json(patients);
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
      const doctors = await appointmentService.getDoctors();
      return res.json(doctors);
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
}

export const appointmentController = new AppointmentController();
