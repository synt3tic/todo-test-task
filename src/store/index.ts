import type { State } from "../types/store.ts";
import type {InjectionKey} from "vue";
import {createStore, Store} from "vuex";
import mutations from "./mutations.ts";
import actions from "./actions.ts";
import getters from "./getters.ts";
import {state} from "./state.ts";

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
    state,
    getters,
    actions,
    mutations,
})
