import { Router } from "express";

import { appointmentController } from "../controllers/appointment.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { bodyValidator } from "../validators/body.validator";

const router = Router();

router.delete("/", appointmentController.deleteAppointment);
router.get("/", appointmentController.getAppointments);
router.post(
  "/",
  commonMiddleware.isBodyValid(bodyValidator.appointment),
  appointmentController.createAppointment,
);

export const appointmentRouter = router;
