import { Router } from "express";
import { usersRoute } from "./users.route";
import { loginRoute } from "./login.route";
import { coursesRoute } from "./courses.route";

export const routes: Router = Router();

routes.use("/users", usersRoute);
routes.use("/login", loginRoute);
routes.use("/courses", coursesRoute);