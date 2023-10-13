import { z } from "zod";
import { coursesCreateSchema, coursesReadSchema, coursesSchema, coursesUpdateSchema } from "../schemas/courses.schema";
import { QueryResult } from "pg";

export type Courses = z.infer<typeof coursesSchema>;

export type CoursesCreate = z.infer<typeof coursesCreateSchema>;

export type CoursesUpdate = z.infer<typeof coursesUpdateSchema>;

export type CoursesRead = z.infer<typeof coursesReadSchema>;

export type CoursesResult = QueryResult<Courses>;