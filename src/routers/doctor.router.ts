import { Router } from "express";

import { doctorController } from "../controllers/doctor.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { bodyValidator } from "../validators/body.validator";

const router = Router();

router.delete("/", doctorController.deleteDoctor);
router.get("/", doctorController.getDoctors);
router.post(
  "/",
  commonMiddleware.isBodyValid(bodyValidator.doctor),
  doctorController.createDoctor,
);

export const doctorRouter = router;
