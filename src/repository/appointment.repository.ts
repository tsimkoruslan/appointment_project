import { Appointmet } from "../model/Appointment.model";
import { IAppointmet } from "../types/body.types";

class AppointmentRepository {
  public async createAppointment(dto: IAppointmet): Promise<IAppointmet> {
    return await Appointmet.create(dto);
  }

  public async getAppointments(): Promise<IAppointmet[]> {
    return await Appointmet.find();
  }

  public async deleteAppointment(name: string) {
    await Appointmet.deleteOne({ name: name });
  }
}

export const appointmentRepository = new AppointmentRepository();
