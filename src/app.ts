import express, { NextFunction, Request, Response } from "express";
import * as mongoose from "mongoose";

import { configs } from "./configs/config";
import { ApiError } from "./errors/api.error";
import { appointmentRouter } from "./routers/appointment.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", appointmentRouter);

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
