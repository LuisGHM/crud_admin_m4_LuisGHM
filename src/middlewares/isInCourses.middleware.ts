import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";
import { client } from "../database";

export const isInCoursesMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;

    const queryUser: string = `SELECT * FROM "userCourses" WHERE "userId" = $1;`;
    const queryUserResult = await client.query(queryUser, [id]); 

    if (queryUserResult.rowCount == 0) {
        throw new AppError("No course found", 404);
    }

    return next();
}