import type { ActionContext } from "vuex";
import type { State } from "../types/store.ts";
import type { ITaskFilterStatus } from "../types/task.ts";
import { addTask, deleteTask, fetchTasks, toggleTask } from "../api/mockApi.ts";

export default {
    async fetchTasks({ commit }: ActionContext<State, State>) {
        commit('SET_LOADING', true);

        try {
            const tasks = await fetchTasks();
            commit('SET_TASKS', tasks);
        } finally {
            commit('SET_LOADING', false);
        }
    },

    async addTask({ commit }: ActionContext<State, State>, title: string) {
        commit('SET_CHANGE_LOADING', true);

        try {
            const task = await addTask(title);
            commit('ADD_TASK', task);
        } finally {
            commit('SET_CHANGE_LOADING', false);
        }
    },

    async deleteTask({ commit }: ActionContext<State, State>, id: number) {
        commit('SET_CHANGE_LOADING', true);

        try {
            await deleteTask(id);
            commit('REMOVE_TASK', id);
        } finally {
            commit('SET_CHANGE_LOADING', false);
        }
    },

    async toggleTask({ commit }: ActionContext<State, State>, id: number) {
        commit('SET_CHANGE_LOADING', true);

        try {
            const task = await toggleTask(id);
            commit('UPDATE_TASK', task);
        } finally {
            commit('SET_CHANGE_LOADING', false);
        }
    },

    setFilter({ commit }: ActionContext<State, State>, filter: ITaskFilterStatus) {
        commit('SET_FILTER', filter);
    },
}
