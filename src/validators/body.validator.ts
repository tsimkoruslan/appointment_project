import joi from "joi";

import { regex } from "../constants/regex.constant";

export class bodyValidator {
  static time = joi.string().regex(regex.TIME).required().trim();
  static firstName = joi.string().trim().required();

  static patient = joi.object({
    time: this.time,
    name: this.firstName,
  });

  static doctor = joi.object({
    time: this.time,
    name: this.firstName,
  });

  static appointment = joi.object({
    namePatient: this.firstName,
    nameDoctor: this.firstName,
    time: this.time,
  });
}
