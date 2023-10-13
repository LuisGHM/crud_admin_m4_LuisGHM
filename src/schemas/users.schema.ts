import { z } from "zod";

export const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(50),
    email: z.string().max(50),
    password: z.string().max(255),
    admin: z.boolean().default(false)
});

export const usersCreateSchema = usersSchema.omit({id: true});

export const usersUpdateSchema = usersCreateSchema.partial();

export const usersReturnSchema = usersSchema.omit({password: true});

export const usersReadSchema = usersReturnSchema.array();