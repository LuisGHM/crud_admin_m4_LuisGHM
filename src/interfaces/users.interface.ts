import { QueryResult } from "pg";

export type Users = {
    id: number;
    name: string;
    email: string;
    password: string;
    admin?: boolean;
};

export type UsersCreate = Omit<Users, "id">;

export type UsersUpdate = Partial<Users>;

export type UsersResult = QueryResult<Users>;