import format from "pg-format";
import { Users, UsersCreate, UsersRead, UsersResult, UsersReturn } from "../interfaces/users.interface"
import { client } from "../database";
import { hashSync } from "bcryptjs";
import { usersReadSchema, usersReturnSchema } from "../schemas/users.schema";

export const postUsersService = async (data: UsersCreate): Promise<UsersReturn> => {
    data.password = hashSync(data.password, 12);

    const queryformat: string = format("INSERT INTO users (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));

    const queryResult: UsersResult = await client.query(queryformat);
    
    return usersReturnSchema.parse(queryResult.rows[0]);
}

export const getAllUsersService = async (): Promise<UsersRead> =>{
    const query: string = "SELECT * FROM users;";

    const queryResult: UsersResult = await client.query(query);
    
    return usersReadSchema.parse(queryResult.rows);
} 

export const getUsersrCoursesService = async (id: number) => {
    const query: string = `SELECT
        c.id AS "courseId",
        c.name AS "courseName",
        c.description AS "courseDescription",
        uc.active AS "userActiveInCourse",
        u.id AS "userId",
        u.name AS "userName"
        FROM users AS u
        JOIN "userCourses" AS uc ON u.id = uc."userId"
        JOIN courses AS c ON uc."courseId" = c.id
        WHERE u.id = $1;
    `

    const queryResult = await client.query(query, [id])

    return queryResult.rows
} 