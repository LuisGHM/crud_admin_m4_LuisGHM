import { Router } from "express";
import { postUsersController } from "../controllers/users.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { usersCreateSchema } from "../schemas/users.schema";
import { uniqueEmailMiddleware } from "../middlewares/uniqueEmail.middleware";

export const usersRoute: Router = Router();

usersRoute.post("/", validateBody(usersCreateSchema), uniqueEmailMiddleware, postUsersController);
usersRoute.get("/")