<script setup lang="ts">
import { useStore } from "vuex";
import {onBeforeMount} from "vue";
import CommonTabs from "./components/common/CommonTabs.vue";
import { key } from "./store";
import {useFilter} from "./composables/useFilter.ts";

const store = useStore(key);
const {
    filterTabs,
    selectedFilterValue,
    onUpdateModelValue
} = useFilter(store);

onBeforeMount(() => {
    store.dispatch('fetchTasks')
})


</script>

<template>
    <CommonTabs
        :model-value="selectedFilterValue"
        :tabs="filterTabs"
        @update:modelValue="onUpdateModelValue"
    >
        <template #tab="{ tab }">{{ tab.label }}</template>
    </CommonTabs>
</template>

<style scoped>
</style>
