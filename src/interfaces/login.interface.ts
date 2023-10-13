import { z } from "zod";
import { loginSchema } from "../schemas/login.schema";

export type Login = z.infer<typeof loginSchema>;

export type LoginReturn = { token: string};