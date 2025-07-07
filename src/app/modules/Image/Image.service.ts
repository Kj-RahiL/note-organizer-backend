import prisma from "../../../shared/prisma";
import QueryBuilder from "../../../helpars/queryBuilder";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";

const createImage = async (data: any) => {

//if you wanna add logic here
    const result = await prisma.image.create({ data });
    return result;
};

const getAllImages = async (query: Record<string, any>) => {
    const queryBuilder = new QueryBuilder(prisma.image, query);
    const images = await queryBuilder
        .search([""])
        .filter()
        .sort()
        .paginate()
        .fields()
        .execute()

    const meta = await queryBuilder.countTotal();
    return { meta, data: images };
};

const getSingleImage = async (id: string) => {
    const result = await prisma.image.findUnique({ where: { id } });
    if(!result){
     throw new ApiError(httpStatus.NOT_FOUND, "Image not found..!!")
    }
    return result;
};

const updateImage = async (id: string, data: any) => {
    const existingImage = await prisma.image.findUnique({ where: { id } });
    if (!existingImage) {
        throw new ApiError(httpStatus.NOT_FOUND, "Image not found..!!");
    }
    const result = await prisma.image.update({ where: { id }, data });
    return result;
};

const deleteImage = async (id: string) => {
 const existingImage = await prisma.image.findUnique({ where: { id } });
    if (!existingImage) {
        throw new ApiError(httpStatus.NOT_FOUND, "Image not found..!!");
    }
    const result = await prisma.image.delete({ where: { id } });
    return null;
};

export const imageService = {
    createImage,
    getAllImages,
    getSingleImage,
    updateImage,
    deleteImage,
};
