import format from "pg-format";
import { Users, UsersCreate, UsersResult } from "../interfaces/users.interface"
import { client } from "../database";

export const postUsersService = async (data: UsersCreate): Promise<Users> => {
    const queryformat: string = format("INSERT INTO users (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: UsersResult = await client.query(queryformat);
    
    return queryResult.rows[0];
}