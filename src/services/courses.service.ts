
import format from "pg-format";
import { Courses, CoursesCreate, CoursesResult } from "../interfaces/courses.interface";
import { client } from "../database";

export const postCoursesService = async (data: CoursesCreate): Promise<Courses> => {
    const queryFormat: string = format("INSERT INTO courses (%I) VALUES (%L) RETURNING *;", Object.keys(data), Object.values(data));
    
    const queryResult: CoursesResult = await client.query(queryFormat);

    return queryResult.rows[0]
}