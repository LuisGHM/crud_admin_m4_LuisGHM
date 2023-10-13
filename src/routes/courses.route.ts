import { Router } from "express";
import { deleteUserCorserController, getAllCoursesController, getCoursesUsersrController, postCoursesController, postUserCoursesController } from "../controllers/courses.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { coursesCreateSchema } from "../schemas/courses.schema";
import { validateAcessMiddleware } from "../middlewares/validateAcess.middleware";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { existUserCourseMiddleware } from "../middlewares/existUserCourse.middleware";

export const coursesRoute: Router = Router();

coursesRoute.post("/", validateTokenMiddleware, validateAcessMiddleware, validateBody(coursesCreateSchema), postCoursesController);
coursesRoute.get("/", getAllCoursesController);
coursesRoute.post("/:courseId/users/:userId", validateTokenMiddleware, validateAcessMiddleware, existUserCourseMiddleware, postUserCoursesController);
coursesRoute.get("/:id/users", validateTokenMiddleware, validateAcessMiddleware, getCoursesUsersrController);
coursesRoute.delete("/:courseId/users/:userId",validateTokenMiddleware, validateAcessMiddleware, existUserCourseMiddleware, deleteUserCorserController);