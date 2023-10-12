import { Router } from "express";
import { usersRoute } from "./users.route";

export const routes: Router = Router();

routes.use("/users", usersRoute);