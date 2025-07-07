import { Router } from "express";
import { imageController } from "./Image.controller";

const router = Router();

// create image
router.post("/create", imageController.createImage);

// get all image
router.get("/", imageController.getAllImages);

// get single image by id
router.get("/:id", imageController.getSingleImage);

// update image
router.put("/:id", imageController.updateImage);

// delete image
router.delete("/:id", imageController.deleteImage);

export const imageRoutes = router;
