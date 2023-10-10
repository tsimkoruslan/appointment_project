import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/config";
import { ApiError } from "./errors/api.error";
import { appointmentRouter } from "./routers/appointment.router";
import { doctorRouter } from "./routers/doctor.router";
import { patientRouter } from "./routers/patient.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/appointment", appointmentRouter);
app.use("/doctor", doctorRouter);
app.use("/patient", patientRouter);
app.use((error: ApiError, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 500;

  res.status(status).json({
    message: error.message,
    status: error.status,
  });
});
app.listen(configs.PORT, async () => {
  await mongoose.connect(configs.DB_URI);
  console.log("Server started 🤖 ");
});
