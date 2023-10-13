import { Router } from "express";
import { getAllUsersController, getUsersrCoursesController, postUsersController } from "../controllers/users.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { usersCreateSchema } from "../schemas/users.schema";
import { uniqueEmailMiddleware } from "../middlewares/uniqueEmail.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";
import { isInCoursesMiddleware } from "../middlewares/isInCourses.middleware";

export const usersRoute: Router = Router();

usersRoute.post("/", validateBody(usersCreateSchema), uniqueEmailMiddleware, postUsersController);
usersRoute.get("/", validateTokenMiddleware, validateAcessMiddleware, getAllUsersController);
usersRoute.get("/:id/courses",validateTokenMiddleware, validateAcessMiddleware, isInCoursesMiddleware, getUsersrCoursesController)