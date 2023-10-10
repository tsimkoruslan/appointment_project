import { Doctor } from "../model/Doctor.model";
import { IDoctor } from "../types/body.types";

class DoctorRepository {
  public async createDoctor(dto: IDoctor): Promise<IDoctor> {
    return await Doctor.create(dto);
  }

  public async getDoctors(): Promise<IDoctor[]> {
    return await Doctor.find();
  }

  public async deleteDoctor(name: string) {
    await Doctor.deleteOne({ name });
  }

  public async getOne(name: string): Promise<IDoctor> {
    return await Doctor.findOne({ name });
  }
}

export const doctorRepository = new DoctorRepository();
