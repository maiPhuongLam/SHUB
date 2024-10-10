import express from "express";
import container from "../utils/di";
import { FileController } from "../controllers/file.controller";
import { INTERFACE_NAME } from "../utils/constants";
import { ReportController } from "../controllers/report.controller";

const router = express.Router();
const controller = container.get<ReportController>(
  INTERFACE_NAME.ReportController
);

router.get("/", controller.queryReport.bind(controller));

export default router;
