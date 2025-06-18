import type { State } from "../types/store.ts";

export const state: State = {
    tasks: [],
    loading: false,
    changeLoading: false,
    filter: 'all',
};
