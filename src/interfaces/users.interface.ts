import { QueryResult } from "pg";
import { z } from "zod";
import { usersCreateSchema, usersReadSchema, usersReturnSchema, usersSchema, usersUpdateSchema } from "../schemas/users.schema";

export type Users = z.infer<typeof usersSchema>;

export type UsersCreate = z.infer<typeof usersCreateSchema>;

export type UsersRead = z.infer<typeof usersReadSchema>;

export type UsersUpdate = z.infer<typeof usersUpdateSchema>;

export type UsersReturn = z.infer<typeof usersReturnSchema>; 

export type UsersResult = QueryResult<Users>;