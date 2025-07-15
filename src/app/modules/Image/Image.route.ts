import { Router } from "express";
import { imageController } from "./Image.controller";
import fileUploaderCloud from "../../../helpars/uploadToCloud";
const router = Router();

// create image
router.post(
  "/create",
  fileUploaderCloud.upload.single("image"),
  imageController.createImage
);

// create multiple images
router.post(
  "/create-multiple",
  fileUploaderCloud.upload.array("images"),
  imageController.createMultipleImages
);

// delete image
router.delete("/delete", imageController.deleteImage);

// delete multiple images
router.delete("/delete-multiple", imageController.deleteMultipleImage);

export const imageRoutes = router;
