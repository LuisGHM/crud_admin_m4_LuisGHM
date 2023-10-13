
import format from "pg-format";
import { Courses, CoursesCreate, CoursesRead, CoursesResult } from "../interfaces/courses.interface";
import { client } from "../database";

export const postCoursesService = async (data: CoursesCreate): Promise<Courses> => {
    const queryFormat: string = format("INSERT INTO courses (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));
    
    const queryResult: CoursesResult = await client.query(queryFormat);

    return queryResult.rows[0]
}

export const getAllCoursesService = async (): Promise<CoursesRead> => {
    const query: string = "SELECT * FROM courses;";

    const queryResult: CoursesResult = await client.query(query);

    return queryResult.rows;
}

export const postUserCoursesService = async (courseId: string, userId: string): Promise<void> => {
    const query: string = `INSERT INTO "userCourses" ("userId", "courseId") VALUES ($1, $2);`

    await client.query(query, [userId, courseId]);

    return;
}

export const getCoursesUsersrService = async (id: number) => {
    const query: string = `
    SELECT
    u.id AS "userId",
    u.name AS "userName",
    c.id AS "courseId",
    c.name AS "courseName",
    c.description AS "courseDescription",
    uc.active as "userActiveInCourse"
    FROM users AS u
    JOIN "userCourses" AS uc ON u.id = uc."userId"
    JOIN courses AS c ON uc."courseId" = c.id
    WHERE c.id = $1;
    `

    const queryResult = await client.query(query, [id])

    return queryResult.rows
} 

export const deleteUserCorserService = async (courseId: number, userId: number): Promise<void> => {
    const query: string = `UPDATE "userCourses" SET active = false WHERE "userId" = $1 AND "courseId" = $2;`;

    await client.query(query, [userId, courseId]);

    return;
}