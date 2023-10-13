import { NextFunction, Request, Response } from "express";
import { UsersResult } from "../interfaces/users.interface";
import { client } from "../database";
import AppError from "../errors/App.error";
import { CoursesResult } from "../interfaces/courses.interface";

export const existUserCourseMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId, courseId } = req.params;

    const queryUser: string = `SELECT * FROM users WHERE id = $1;`;
    const queryUserResult: UsersResult = await client.query(queryUser, [userId]);

    const queryCourse: string = `SELECT * FROM courses WHERE id = $1;`;
    const queryCourseResult: CoursesResult = await client.query(queryCourse, [courseId]);

    if (queryUserResult.rowCount == 0 || queryCourseResult.rowCount == 0) {
        throw new AppError("User/course not found", 404);
    }

    return next();
}