import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { noteService } from "./Note.service";

const createNote = catchAsync(async (req: Request, res: Response) => {
  const authorId = req.user.id;
  const result = await noteService.createNote({ ...req.body, authorId });
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Note created successfully",
    data: result,
  });
});

const getMyNotes = catchAsync(async (req: Request, res: Response) => {
  const authorId = req.user.id;
  const { isArchived, isDeleted, ...query } = req.query;
  // console.log(showArchived, 'kk');
  const results = await noteService.getAllNotes(
    {
      sort: "-isPinned,-createdAt",
      authorId,
      ...query,
    },
    isArchived as string,
    isDeleted as string
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Your Notes retrieved successfully",
    meta: results.meta,
    data: results.data,
  });
});

const getAllNotes = catchAsync(async (req: Request, res: Response) => {
  const { isArchived, isDeleted, ...query } = req.query;
  // console.log(showArchived, 'kk');
  const results = await noteService.getAllNotes(
    {
      sort: "-isPinned,-createdAt",
      ...query,
    },
    isArchived as string,
    isDeleted as string
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notes retrieved successfully",
    meta: results.meta,
    data: results.data,
  });
});

const getSingleNote = catchAsync(async (req: Request, res: Response) => {
  const result = await noteService.getSingleNote(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Note retrieved successfully",
    data: result,
  });
});

const updateNote = catchAsync(async (req: Request, res: Response) => {
  const result = await noteService.updateNote(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Note updated successfully",
    data: result,
  });
});

const deleteNote = catchAsync(async (req: Request, res: Response) => {
  const result = await noteService.deleteNote(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Note deleted successfully",
    data: result,
  });
});

export const noteController = {
  createNote,
  getMyNotes,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
};
