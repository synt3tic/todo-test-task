import type { State } from "../types/store.ts";

export const state: State = {
    tasks: [],
    loading: false,
    filter: 'all',
};
