import { usersSchema } from "./users.schema";

export const loginSchema = usersSchema.pick({
    email: true,
    password: true
});