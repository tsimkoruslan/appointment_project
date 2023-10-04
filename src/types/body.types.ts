import { Document } from "mongoose";

export interface IPatient extends Document {
  id: number;
  time: string;
  name?: string;
}

export interface IDoctor extends Document {
  id: number;
  time: string;
  name: string;
}

export interface IAppointmet extends Document {
  idPatients: number;
  idDoctors: number;
  time: string;
}

export interface IAppointmetObj extends Document {
  appointmet: IAppointmet;
  doctor: IDoctor;
  patient: IPatient;
}
