import { patientRepository } from "../repository/patient.repository";
import { IPatient } from "../types/body.types";

class PatientService {
  public async createPatient(dto: IPatient): Promise<IPatient> {
    return await patientRepository.createPatient(dto);
  }

  public async getPatients(): Promise<IPatient[]> {
    return await patientRepository.getPatients();
  }

  public async deleteOne(name: string): Promise<void> {
    await patientRepository.deletePatient(name);
  }
}
export const patientService = new PatientService();
