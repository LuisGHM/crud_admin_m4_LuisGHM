import { Request, Response } from "express";
import { Users } from "../interfaces/users.interface";
import { postUsersService } from "../services/users.service";

export const postUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users: Users = await postUsersService(req.body);

    return res.status(201).json(users);
}

