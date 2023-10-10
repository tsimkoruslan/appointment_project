import { doctorRepository } from "../repository/doctor.repository";
import { IDoctor } from "../types/body.types";

class DoctorService {
  public async createDoctor(dto: IDoctor): Promise<IDoctor> {
    return await doctorRepository.createDoctor(dto);
  }

  public async getDoctor(): Promise<IDoctor[]> {
    return await doctorRepository.getDoctors();
  }

  public async deleteOne(name: string): Promise<void> {
    await doctorRepository.deleteDoctor(name);
  }
}
export const doctorService = new DoctorService();
