import {computed, onBeforeMount, ref} from "vue";
import type {ITask} from "../types/task.ts";
import type {Store} from "vuex";
import type {State} from "../types/store.ts";

export const useTasks = (store: Store<State>) => {
    onBeforeMount(() => {
        store.dispatch('fetchTasks')
    })

    const newTaskTitle = ref('');
    const filteredTasks = computed<ITask[]>(() => store.getters.getFilteredTasks);
    const isListLoading = computed<boolean>(() => store.state.loading);
    const isLoading = computed<boolean>(() => store.state.changeLoading);

    const addNewTask = async () => {
        if (newTaskTitle.value.trim()) {
            await store.dispatch('addTask', newTaskTitle.value.trim());
            newTaskTitle.value = '';
        }
    };

    const onToggleTask = (id: number) => {
        store.dispatch('toggleTask', id);
    };

    const onDeleteTask = (id: number) => {
        store.dispatch('deleteTask', id);
    };

    return {
        newTaskTitle,
        filteredTasks,
        isListLoading,
        isLoading,
        addNewTask,
        onToggleTask,
        onDeleteTask,
    }
}
