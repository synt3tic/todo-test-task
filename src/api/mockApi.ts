import type { ITask } from "../types/task.ts";
import {delay} from "../assets/utils/common-utils.ts";

let tasks: ITask[] = [
    { id: 1, title: 'Learn Vue 3', completed: false },
    { id: 2, title: 'Learn TypeScript', completed: true },
    { id: 3, title: 'Build a task app', completed: false }
];

let nextId = 4;

export const fetchTasks = async (): Promise<ITask[]> => {
    await delay();

    return [...tasks];
};

export const addTask = async (title: string): Promise<ITask> => {
    await delay();
    const newTask: ITask = {
        id: nextId++,
        title,
        completed: false
    };

    tasks.push(newTask);

    return newTask;
}

export const deleteTask = async (id: number) => {
    await delay();
    tasks = tasks.filter((task) => task.id !== id);
}

export const toggleTask = async (id: number) => {
    await delay();
    const task = tasks.find(task => task.id === id);
    if (!task) {
        throw new Error('Task not found');
    }

    task.completed = !task.completed;

    return { ...task };
}

