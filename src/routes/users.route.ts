import { Router } from "express";
import { getAllUsersController, postUsersController } from "../controllers/users.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { usersCreateSchema } from "../schemas/users.schema";
import { uniqueEmailMiddleware } from "../middlewares/uniqueEmail.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";

export const usersRoute: Router = Router();

usersRoute.post("/", validateBody(usersCreateSchema), uniqueEmailMiddleware, postUsersController);
usersRoute.get("/", validateTokenMiddleware, validateAcessMiddleware, getAllUsersController);