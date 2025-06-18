import type { MutationTree } from "vuex";
import type { State } from "../types/store";
import type { ITask } from "../types/task.ts";

const mutations: MutationTree<State> = {
    SET_TASKS(state: State, tasks: ITask[]) {
        state.tasks = tasks;
    },

    ADD_TASK(state: State, task: ITask) {
        state.tasks.push(task);
    },

    REMOVE_TASK(state: State, id: number) {
        state.tasks = state.tasks.filter(task => task.id !== id);
    },

    UPDATE_TASK(state: State, updatedTask: ITask) {
        const index = state.tasks.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
            state.tasks.splice(index, 1, updatedTask);
        }
    },

    SET_FILTER(state: State, filter: 'all' | 'active' | 'completed') {
        state.filter = filter;
    },

    SET_LOADING(state: State, loading: boolean) {
        state.loading = loading;
    }
};

export default mutations;
