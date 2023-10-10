import { ApiError } from "../errors/api.error";
import { appointmentRepository } from "../repository/appointment.repository";
import { doctorRepository } from "../repository/doctor.repository";
import { patientRepository } from "../repository/patient.repository";
import { IAppointmet } from "../types/body.types";

class AppointmentService {
  public async createAppointment(dto: IAppointmet): Promise<IAppointmet> {
    const doctor = await doctorRepository.getOne(dto.nameDoctor);
    if (!doctor) {
      throw new ApiError("Such a doctor is out of place", 404);
    }
    const timeDoctor = doctor.time.split("-");

    const patient = await patientRepository.getOne(dto.namePatient);
    if (!patient) {
      throw new ApiError("Such a patient is out of place", 404);
    }
    const timePatient = patient.time.split("-");

    switch (true) {
      case timePatient[0] >= timeDoctor[0] && timePatient[0] <= timeDoctor[1]:
        dto.time = timePatient[0];

        break;
      case timePatient[1] >= timeDoctor[0] && timePatient[1] <= timeDoctor[1]:
        dto.time = timePatient[1];
        break;
      default:
        throw new ApiError("Meetings at a given time are not possible", 405);
        break;
    }

    return await appointmentRepository.createAppointment(dto);
  }

  public async getAppointments(): Promise<IAppointmet[]> {
    return await appointmentRepository.getAppointments();
  }

  public async deleteOne(name: string): Promise<void> {
    await appointmentRepository.deleteAppointment(name);
  }
}
export const appointmentService = new AppointmentService();
