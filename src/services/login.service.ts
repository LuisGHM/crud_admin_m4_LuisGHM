import { sign } from "jsonwebtoken";
import { client } from "../database";
import AppError from "../errors/App.error";
import { Login, LoginReturn } from "../interfaces/login.interface";
import { Users, UsersResult } from "../interfaces/users.interface";
import { compare } from "bcryptjs";

export const postLoginService = async (data: Login): Promise<LoginReturn> => {
    const { email, password } = data;
    const query = await client.query('SELECT * FROM users WHERE email = $1;', [email]);

    if (query.rowCount === 0) {
        throw new AppError('Wrong email/password', 401);
    }

    const user: Users = query.rows[0];
    const { password: userPassword, id, admin } = user;

    const isPasswordValid = await compare(password, userPassword);

    if (!isPasswordValid) {
        throw new AppError('Wrong email/password', 401);
    }

    const token = sign({ email, admin }, process.env.SECRET_KEY!, {
        subject: id.toString(),
        expiresIn: process.env.EXPIRES_IN!,
    });

    return { token };
}