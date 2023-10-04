import { Router } from "express";

import { appointmentController } from "../controllers/appointment.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { bodyValidator } from "../validators/body.validator";

const router = Router();

router.post(
  "/",
  commonMiddleware.isBodyValid(bodyValidator.appointmentObject),
  appointmentController.appointment,
);

export const appointmentRouter = router;
