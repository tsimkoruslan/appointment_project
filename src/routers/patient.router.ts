import { Router } from "express";

import { patientController } from "../controllers/patient.controler";
import { commonMiddleware } from "../middlewares/common.middleware";
import { bodyValidator } from "../validators/body.validator";

const router = Router();

router.delete("/", patientController.deletePatient);
router.get("/", patientController.getPatients);
router.post(
  "/",
  commonMiddleware.isBodyValid(bodyValidator.patient),
  patientController.createPatient,
);

export const patientRouter = router;
