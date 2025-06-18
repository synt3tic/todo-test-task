import type {ITask, ITaskFilterStatus} from "./task.ts";

export interface State {
    tasks: ITask[];
    loading: boolean;
    filter: ITaskFilterStatus;
}
