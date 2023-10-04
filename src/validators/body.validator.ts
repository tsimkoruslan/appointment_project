import joi from "joi";

export class bodyValidator {
  static id = joi.number().min(1).required();
  static time = joi.string().min(0).max(5).required().trim();
  static firstName = joi.string().trim();

  static patient = joi.object({
    id: this.id,
    time: this.time,
    name: this.firstName,
  });

  static doctor = joi.object({
    id: this.id,
    time: this.time,
    name: this.firstName.required(),
  });

  static appointment = joi.object({
    idPatient: this.id,
    idDoctor: this.id,
    time: this.time,
  });

  static appointmentObject = joi.object({
    patient: this.patient,
    doctor: this.doctor,
    appointment: this.appointment,
  });
}
