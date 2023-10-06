import { Appointmet } from "../model/Appointment.model";
import { Doctor } from "../model/Doctor.model";
import { Patient } from "../model/Patient.model";
import { IAppointmet, IDoctor, IPatient } from "../types/body.types";

class AppointmentRepository {
  public async createDoctor(dto: IDoctor): Promise<IDoctor> {
    return await Doctor.create(dto);
  }

  public async createPatient(dto: IPatient): Promise<IPatient> {
    return await Patient.create(dto);
  }

  public async createAppointment(dto: IAppointmet): Promise<IAppointmet> {
    return await Appointmet.create(dto);
  }

  public async getPatients(): Promise<IPatient[]> {
    return await Patient.find();
  }

  public async getDoctors(): Promise<IDoctor[]> {
    return await Doctor.find();
  }

  public async getAppointments(): Promise<IAppointmet[]> {
    return await Appointmet.find();
  }
}

export const appointmentRepository = new AppointmentRepository();
