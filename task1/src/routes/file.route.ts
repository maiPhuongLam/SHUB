import express from "express";
import container from "../utils/di";
import { INTERFACE_NAME } from "../utils/constants";
import { FileController } from "../controllers/file.controller";
import { validationResource } from "../middlewares/validation";
import { FileUploadSchema } from "../validate/file.validate";
import upload from "../middlewares/upload";

const router = express.Router();
const controller = container.get<FileController>(INTERFACE_NAME.FileController);

router.post(
  "/upload",
  upload.single("file"),
  validationResource(FileUploadSchema),
  controller.upload.bind(controller)
);

export default router;
