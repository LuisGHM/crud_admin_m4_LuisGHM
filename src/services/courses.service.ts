
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