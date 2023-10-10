import { model, Schema } from "mongoose";

import { IPatient } from "../types/body.types";

const patientShema = new Schema(
  {
    name: {
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

export const Patient = model<IPatient>("patient", patientShema);
