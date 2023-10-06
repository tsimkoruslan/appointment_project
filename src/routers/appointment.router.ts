import { Router } from "express";

import { appointmentController } from "../controllers/appointment.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { bodyValidator } from "../validators/body.validator";

const router = Router();

router.get("/patients", appointmentController.getPatients);
router.post(
  "/patient",
  commonMiddleware.isBodyValid(bodyValidator.patient),
  appointmentController.createPatient,
);

router.get("/doctors", appointmentController.getDoctors);
router.post(
  "/doctor",
  commonMiddleware.isBodyValid(bodyValidator.doctor),
  appointmentController.createDoctor,
);

router.get("/appointments", appointmentController.getAppointments);
router.post(
  "/appointment",
  commonMiddleware.isBodyValid(bodyValidator.appointment),
  appointmentController.createAppointment,
);

export const appointmentRouter = router;
