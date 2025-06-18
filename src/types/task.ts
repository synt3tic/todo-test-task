export interface ITask {
    id: number;
    title: string;
    completed: boolean;
}

export type ITaskFilterStatus = 'all' | 'active' | 'completed';
