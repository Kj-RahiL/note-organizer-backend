import { Router } from "express";
import { noteController } from "./Note.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { NoteValidation } from "./Note.validation";

const router = Router();

// create note
router.post("/create", auth(), validateRequest(NoteValidation.NoteSchema), noteController.createNote);

// get all note
router.get("/", noteController.getAllNotes);


// get all my note
router.get("/my-notes", auth(),  noteController.getMyNotes);

// get single note by id
router.get("/:id", auth(), noteController.getSingleNote);

// update note
router.put(
  "/:id",
  auth(),
  validateRequest(NoteValidation.UpdateNoteSchema),
  noteController.updateNote
);

// delete note
router.delete("/:id", auth(), noteController.deleteNote);

export const noteRoutes = router;
