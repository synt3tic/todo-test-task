import type { GetterTree } from 'vuex';
import type { State } from '../types/store.ts';
import type {ITask} from "../types/task.ts";

const getters: GetterTree<State, State> = {
    getFilteredTasks: (state: State): ITask[] => {
        switch (state.filter) {
            case 'active':
                return state.tasks.filter(task => !task.completed);
            case 'completed':
                return state.tasks.filter(task => task.completed);
            default:
                return state.tasks;
        }
    },

    getActiveTaskCount: (state: State): number => {
        return state.tasks.filter(task => !task.completed).length;
    }
};

export default getters;
