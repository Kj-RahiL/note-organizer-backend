import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { imageService } from "./Image.service";

const createImage = catchAsync(async (req: Request, res: Response) => {
    const result = await imageService.createImage(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Image created successfully",
        data: result,
    });
});

const getAllImages = catchAsync(async (req: Request, res: Response) => {
    const results = await imageService.getAllImages(req.query);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Images retrieved successfully",
        meta:results.meta,
        data: results.data,
    });
});

const getSingleImage = catchAsync(async (req: Request, res: Response) => {
    const result = await imageService.getSingleImage(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Image retrieved successfully",
        data: result,
    });
});

const updateImage = catchAsync(async (req: Request, res: Response) => {
    const result = await imageService.updateImage(req.params.id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Image updated successfully",
        data: result,
    });
});

const deleteImage = catchAsync(async (req: Request, res: Response) => {
    const result = await imageService.deleteImage(req.params.id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Image deleted successfully",
        data: result,
    });
});

export const imageController = {
    createImage,
    getAllImages,
    getSingleImage,
    updateImage,
    deleteImage,
};
