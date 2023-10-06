import { model, Schema } from "mongoose";

import { IAppointmet } from "../types/body.types";

const appointmentShema = new Schema(
  {
    nameDoctor: {
      type: String,
      required: true,
    },
    namePatient: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

export const Appointmet = model<IAppointmet>("appointmet", appointmentShema);
