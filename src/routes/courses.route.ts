import { Router } from "express";
import { postCoursesController } from "../controllers/courses.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { coursesCreateSchema } from "../schemas/courses.schema";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";

export const coursesRoute: Router = Router();

coursesRoute.post("/", validateTokenMiddleware, validateAcessMiddleware, validateBody(coursesCreateSchema), postCoursesController);