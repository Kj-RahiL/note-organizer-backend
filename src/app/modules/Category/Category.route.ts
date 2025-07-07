import { Router } from "express";
import { categoryController } from "./Category.controller";

const router = Router();

// create category
router.post("/create", categoryController.createCategory);

// get all category
router.get("/", categoryController.getAllCategorys);

// get single category by id
router.get("/:id", categoryController.getSingleCategory);

// update category
router.put("/:id", categoryController.updateCategory);

// delete category
router.delete("/:id", categoryController.deleteCategory);

export const categoryRoutes = router;
