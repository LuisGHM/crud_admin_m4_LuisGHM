import { Router } from "express";
import { postUsersController } from "../controllers/users.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { usersCreateSchema } from "../schemas/users.schema";

export const usersRoute: Router = Router();

usersRoute.post("/", validateBody(usersCreateSchema), postUsersController);
usersRoute.get("/")