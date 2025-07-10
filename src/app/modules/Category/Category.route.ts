import { Router } from "express";
import { categoryController } from "./Category.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CategoryValidation } from "./Category.validation";

const router = Router();

// create category
router.post("/create", auth(), validateRequest(CategoryValidation.CategorySchema), categoryController.createCategory);


// get all category
router.get("/",  categoryController.getAllCategorys);

// get single category by id
router.get("/:id", auth(), categoryController.getSingleCategory);

// update category
router.put("/:id", auth(), categoryController.updateCategory);

// delete category
router.delete("/:id", auth(), categoryController.deleteCategory);

export const categoryRoutes = router;
