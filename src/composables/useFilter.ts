import type {ITaskFilterStatus} from "../types/task.ts";
import {ref} from "vue";
import type {State} from "../types/store.ts";
import type {Store} from "vuex";

export const useFilter = (store: Store<State>) => {
    const filterTabs: { id: ITaskFilterStatus, label: string }[] = [
        {
            id: 'all',
            label: 'Все',
        },
        {
            id: 'active',
            label: 'В процессе',
        },
        {
            id: 'completed',
            label: 'Завершенные',
        }
    ];
    const selectedFilterValue = ref(filterTabs[0].id);
    const onUpdateModelValue = (value: string | number) => {
        selectedFilterValue.value = value as ITaskFilterStatus;
        store.dispatch('setFilter', value);
    }

    return {
        filterTabs,
        selectedFilterValue,
        onUpdateModelValue,
    }
}
