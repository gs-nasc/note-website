import User from "./user";

export default interface Task {
    id: number;
    user: User;
    title: string;
    description: string;
    color: string;
    completed: boolean;
    deleted: boolean;
    created_at: string;
    updated_at: string;
}