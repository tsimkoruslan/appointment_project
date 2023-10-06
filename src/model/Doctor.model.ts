import { model, Schema } from "mongoose";

import { IDoctor } from "../types/body.types";

const doctorShema = new Schema(
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

export const Doctor = model<IDoctor>("doctor", doctorShema);
