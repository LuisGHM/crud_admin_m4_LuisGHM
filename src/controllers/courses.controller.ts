import { Request, Response } from "express";
import { Courses, CoursesRead } from "../interfaces/courses.interface";
import { deleteUserCorserService, getAllCoursesService, getCoursesUsersrService, postCoursesService, postUserCoursesService } from "../services/courses.service";

export const postCoursesController = async (req: Request, res: Response): Promise<Response> => {
    const courses: Courses = await postCoursesService(req.body);

    return res.status(201).json(courses);
}

export const getAllCoursesController = async (req: Request, res:Response): Promise<Response> => {
    const courses: CoursesRead = await getAllCoursesService();

    return res.status(200).json(courses);
}

export const postUserCoursesController = async (req: Request, res:Response): Promise<Response> => {
    await postUserCoursesService(req.params.courseId, req.params.userId);

    return res.status(201).json({message: "User successfully vinculed to course"})
}

export const getCoursesUsersrController = async (req: Request, res: Response): Promise<Response> => {
    const usersCourse = await getCoursesUsersrService(+req.params.id);

    return res.status(200).json(usersCourse);
} 

export const deleteUserCorserController = async (req: Request, res: Response): Promise<Response> => {
    await deleteUserCorserService(+req.params.courseId, +req.params.userId);

    return res.status(204).json();
}