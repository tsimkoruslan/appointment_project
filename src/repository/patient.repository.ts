import { Patient } from "../model/Patient.model";
import { IPatient } from "../types/body.types";

class PatientRepository {
  public async createPatient(dto: IPatient): Promise<IPatient> {
    return await Patient.create(dto);
  }
  public async getPatients(): Promise<IPatient[]> {
    return await Patient.find();
  }

  public async deletePatient(name: string) {
    await Patient.deleteOne({ name });
  }

  public async getOne(name: string): Promise<IPatient> {
    return await Patient.findOne({ name });
  }
}

export const patientRepository = new PatientRepository();
