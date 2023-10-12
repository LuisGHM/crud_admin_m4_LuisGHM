import { Router } from "express";
import { postUsersController } from "../controllers/users.controller";

export const usersRoute: Router = Router();

usersRoute.post("/", postUsersController);
usersRoute.get("/")