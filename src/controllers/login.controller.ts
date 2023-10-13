import { Request, Response } from "express";
import { LoginReturn } from "../interfaces/login.interface";
import { postLoginService } from "../services/login.service";

export const postLoginController = async (req: Request, res: Response): Promise<Response> => {
    const token: LoginReturn = await postLoginService(req.body);

    return res.status(200).json(token);
}