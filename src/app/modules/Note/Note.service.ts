import prisma from "../../../shared/prisma";
import QueryBuilder from "../../../helpars/queryBuilder";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";

const createNote = async (data: any) => {

//if you wanna add logic here
    const result = await prisma.note.create({ data });
    return result;
};

const getAllNotes = async (query: Record<string, any>) => {
    const queryBuilder = new QueryBuilder(prisma.note, query);
    const notes = await queryBuilder
        .search([""])
        .filter()
        .sort()
        .paginate()
        .fields()
        .execute()

    const meta = await queryBuilder.countTotal();
    return { meta, data: notes };
};

const getSingleNote = async (id: string) => {
    const result = await prisma.note.findUnique({ where: { id } });
    if(!result){
     throw new ApiError(httpStatus.NOT_FOUND, "Note not found..!!")
    }
    return result;
};

const updateNote = async (id: string, data: any) => {
    const existingNote = await prisma.note.findUnique({ where: { id } });
    if (!existingNote) {
        throw new ApiError(httpStatus.NOT_FOUND, "Note not found..!!");
    }
    const result = await prisma.note.update({ where: { id }, data });
    return result;
};

const deleteNote = async (id: string) => {
 const existingNote = await prisma.note.findUnique({ where: { id } });
    if (!existingNote) {
        throw new ApiError(httpStatus.NOT_FOUND, "Note not found..!!");
    }
    const result = await prisma.note.delete({ where: { id } });
    return null;
};

export const noteService = {
    createNote,
    getAllNotes,
    getSingleNote,
    updateNote,
    deleteNote,
};
