import { Router } from "express";
import { noteController } from "./Note.controller";

const router = Router();

// create note
router.post("/create", noteController.createNote);

// get all note
router.get("/", noteController.getAllNotes);

// get single note by id
router.get("/:id", noteController.getSingleNote);

// update note
router.put("/:id", noteController.updateNote);

// delete note
router.delete("/:id", noteController.deleteNote);

export const noteRoutes = router;
