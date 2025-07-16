import { Router } from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  showStats,
} from "../controllers/jobControllers.js";
import {
  validateIdParam,
  validateJobInput,
} from "../middleware/ValidationMiddleware.js";
import { checkForTestUser } from "../middleware/AuthMiddleware.js";
const router = Router();

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getSingleJob)
  .patch(checkForTestUser, validateIdParam, validateJobInput, updateJob)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
