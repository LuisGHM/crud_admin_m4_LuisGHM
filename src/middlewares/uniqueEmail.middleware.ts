import { NextFunction, Request, Response } from "express";
import { UsersResult } from "../interfaces/users.interface";
import { client } from "../database";
import AppError from "../errors/App.error";

export const uniqueEmailMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.body;

    const query: string = `SELECT * FROM users WHERE email = $1;`;
    const queryResult: UsersResult = await client.query(query, [email]);

    if(queryResult.rowCount){
        throw new AppError("Email already registered", 409);
    }

    return next();
}