import { Router } from "express";
import { postLoginController } from "../controllers/login.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { loginSchema } from "../schemas/login.schema";

export const loginRoute: Router = Router();

loginRoute.post("/", validateBody(loginSchema), postLoginController);