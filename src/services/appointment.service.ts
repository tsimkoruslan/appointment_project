import { appointmentRepository } from "../repository/appointment.repository";
import { IAppointmet, IDoctor, IPatient } from "../types/body.types";

class AppointmentService {
  public async createDoctor(dto: IDoctor): Promise<IDoctor> {
    return await appointmentRepository.createDoctor(dto);
  }

  public async createPatient(dto: IPatient): Promise<IPatient> {
    return await appointmentRepository.createPatient(dto);
  }

  public async createAppointment(dto: IAppointmet): Promise<IAppointmet> {
    return await appointmentRepository.createAppointment(dto);
  }

  public async getPatients(): Promise<IPatient[]> {
    return await appointmentRepository.getPatients();
  }

  public async getDoctors(): Promise<IDoctor[]> {
    return await appointmentRepository.getDoctors();
  }

  public async getAppointments(): Promise<IAppointmet[]> {
    return await appointmentRepository.getAppointments();
  }
}
export const appointmentService = new AppointmentService();
