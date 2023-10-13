import { Request, Response } from "express";
import { Users, UsersRead, UsersReturn } from "../interfaces/users.interface";
import { getAllUsersService, postUsersService } from "../services/users.service";

export const postUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users: UsersReturn = await postUsersService(req.body);

    return res.status(201).json(users);
}

export const getAllUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users: UsersRead = await getAllUsersService();
    
    return res.status(200).json(users);
} 
/* 
export const getUsersrCoursesController = async (req: Request, res: Response): Promise<Response> => {
    const usersCourse = await getUsersrCoursesService();
} */