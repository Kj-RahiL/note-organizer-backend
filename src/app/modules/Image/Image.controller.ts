import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { imageService } from "./Image.service";

const createImage = catchAsync(async (req: Request, res: Response) => {
    console.log(req.file)
  const result = await imageService.createImage(req);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Image created successfully",
    data: result,
  });
});

const createMultipleImages = catchAsync(async (req: Request, res: Response) => {
  const result = await imageService.createMultipleImages(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Image created successfully",
    data: result,
  });
});

const deleteImage = catchAsync(async (req: Request, res: Response) => {
  const { url } = req.body;
  const result = await imageService.deleteImage(url);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Image deleted successfully",
    data: result,
  });
});

const deleteMultipleImage = catchAsync(async (req: Request, res: Response) => {
  const { urls } = req.body;
  const result = await imageService.deleteMultipleImages(urls);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Image deleted successfully",
    data: result,
  });
});

export const imageController = {
  createImage,
  createMultipleImages,
  deleteImage,
  deleteMultipleImage,
};
