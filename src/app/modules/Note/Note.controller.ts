import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { noteService } from "./Note.service";

const createNote = catchAsync(async (req: Request, res: Response) => {
    const result = await noteService.createNote(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Note created successfully",
        data: result,
    });
});

const getAllNotes = catchAsync(async (req: Request, res: Response) => {
    const results = await noteService.getAllNotes(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Notes retrieved successfully",
        meta:results.meta,
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
    getAllNotes,
    getSingleNote,
    updateNote,
    deleteNote,
};
