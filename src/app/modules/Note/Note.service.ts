import prisma from "../../../shared/prisma";
import QueryBuilder from "../../../helpars/queryBuilder";
import ApiError from "../../../errors/ApiErrors";
import httpStatus from "http-status";

const createNote = async (data: any) => {
  //if you wanna add logic here
  const result = await prisma.note.create({ data });
  return result;
};

const getAllNotes = async (
  query: Record<string, any>,
  isArchived: string,
  isDeleted: string
) => {
  if (query.categoryId === "null" || query.categoryId === "") {
    delete query.categoryId; // remove it to avoid filtering by invalid id
  }

  const queryBuilder = new QueryBuilder(prisma.note, query);

  // build filters based on conditions
  let filters: Record<string, boolean> = {};

  if (isDeleted === "true") {
    filters = { isDeleted: true }; // deleted data only
  } else if (isArchived === "true") {
    filters = { isArchived: true, isDeleted: false }; // archived but not deleted
  } else {
    filters = { isArchived: false, isDeleted: false }; // fresh data
  }

    console.log(filters, 'filters');
  const notes = await queryBuilder
    .search(["title", "content"])
    .filter()
    .rawFilter(filters)
    .sort()
    .paginate()
    .fields()
    .include({
      category: true,
    })
    .execute();

  const meta = await queryBuilder.countTotal();
  return { meta, data: notes };
};


const getSingleNote = async (id: string) => {
  const result = await prisma.note.findUnique({ where: { id } });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, "Note not found..!!");
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
