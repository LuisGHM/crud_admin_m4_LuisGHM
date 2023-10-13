import { Request, Response } from "express";
import { Courses } from "../interfaces/courses.interface";
import { postCoursesService } from "../services/courses.service";

export const postCoursesController = async (req: Request, res: Response): Promise<Response> => {
    const courses: Courses = await postCoursesService(req.body);

    return res.status(201).json(courses);
}