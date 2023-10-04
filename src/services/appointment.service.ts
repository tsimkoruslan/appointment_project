import { IAppointmetObj } from "../types/body.types";

class AppointmentService {
  public async appointment(body: IAppointmetObj) {
    const { appointmet, doctor, patient } = body;

    const patientTimeParts = patient.time.split("-");
    const doctorTimeParts = doctor.time.split("-");
    const appointmetTimeParts = patient.time.split("-");

    if (
      patientTimeParts[0] <= appointmetTimeParts[1] &&
      patientTimeParts[1] >= appointmetTimeParts[0] &&
      doctorTimeParts[0] <= appointmetTimeParts[1] &&
      doctorTimeParts[1] >= appointmetTimeParts[0]
    ) {
      console.log("Зустріч можлива");
    } else {
      console.log("Зустріч не можлива");
    }
  }
}

export const appointmentService = new AppointmentService();
