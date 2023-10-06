import { Document } from "mongoose";

export interface IPatient extends Document {
  time: string;
  name: string;
}

export interface IDoctor extends Document {
  time: string;
  name: string;
}

export interface IAppointmet extends Document {
  nameDoctor: string;
  namePatient: string;
  time: string;
}
