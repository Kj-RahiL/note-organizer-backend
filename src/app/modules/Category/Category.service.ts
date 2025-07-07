import prisma from "../../../shared/prisma";
import QueryBuilder from "../../../helpars/queryBuilder";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";

const createCategory = async (data: any) => {

//if you wanna add logic here
    const result = await prisma.category.create({ data });
    return result;
};

const getAllCategorys = async (query: Record<string, any>) => {
    const queryBuilder = new QueryBuilder(prisma.category, query);
    const categorys = await queryBuilder
        .search([""])
        .filter()
        .sort()
        .paginate()
        .fields()
        .execute()

    const meta = await queryBuilder.countTotal();
    return { meta, data: categorys };
};

const getSingleCategory = async (id: string) => {
    const result = await prisma.category.findUnique({ where: { id } });
    if(!result){
     throw new ApiError(httpStatus.NOT_FOUND, "Category not found..!!")
    }
    return result;
};

const updateCategory = async (id: string, data: any) => {
    const existingCategory = await prisma.category.findUnique({ where: { id } });
    if (!existingCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, "Category not found..!!");
    }
    const result = await prisma.category.update({ where: { id }, data });
    return result;
};

const deleteCategory = async (id: string) => {
 const existingCategory = await prisma.category.findUnique({ where: { id } });
    if (!existingCategory) {
        throw new ApiError(httpStatus.NOT_FOUND, "Category not found..!!");
    }
    const result = await prisma.category.delete({ where: { id } });
    return null;
};

export const categoryService = {
    createCategory,
    getAllCategorys,
    getSingleCategory,
    updateCategory,
    deleteCategory,
};
