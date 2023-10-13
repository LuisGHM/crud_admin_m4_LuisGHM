import { NextFunction, Request, Response } from "express";
import AppError from "../errors/App.error";
import { verify } from "jsonwebtoken";

export const validateTokenMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const authorization: string | undefined = req.headers.authorization
    
    if(!authorization || authorization == "Bearer" || authorization == `Bearer ${undefined}`){
        throw new AppError("Missing bearer token", 401);
    }

    const token: string = authorization.split(" ")[1];
    const decoded = verify(token, process.env.SECRET_KEY!);

    res.locals = {...res.locals, decoded};

    return next();
}