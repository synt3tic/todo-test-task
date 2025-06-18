<script setup lang="ts">
import { useStore } from "vuex";
import {computed, onBeforeMount, ref} from "vue";
import CommonTabs from "./components/common/CommonTabs.vue";
import { key } from "./store";
import {useFilter} from "./composables/useFilter.ts";
import CommonList from "./components/common/CommonList.vue";
import type {ITask} from "./types/task.ts";
import TaskItem from "./components/task/TaskItem.vue";
import {useTasks} from "./composables/useTasks.ts";

const store = useStore(key);
const {
    filterTabs,
    activeTasksCount,
    selectedFilterValue,
    onUpdateModelValue
} = useFilter(store);
const {
    newTaskTitle,
    filteredTasks,
    isListLoading,
    isLoading,
    addNewTask,
    onToggleTask,
    onDeleteTask,
} = useTasks(store);

</script>

<template>
    <h1>Task Manager</h1>

    <div class="task-form">
        <input
            v-model="newTaskTitle"
            :disabled="isLoading"
            @keyup.enter="addNewTask"
            placeholder="Add a new task..."
        />
        <button @click="addNewTask" :disabled="!newTaskTitle.trim() || isLoading">Add</button>
    </div>

    <CommonTabs
        :model-value="selectedFilterValue"
        :tabs="filterTabs"
        @update:modelValue="onUpdateModelValue"
    >
        <template #tab="{ tab }">{{ tab.label }}</template>
    </CommonTabs>

    <span v-if="activeTasksCount" class="count">
        {{ activeTasksCount }} items left
    </span>

    <div v-if="isListLoading" class="loading">Loading...</div>

    <CommonList v-else-if="filteredTasks.length" :list="filteredTasks">
        <template #default="{ item }">
            <TaskItem :task="item" @toggle="onToggleTask" @delete="onDeleteTask" />
        </template>
    </CommonList>

    <div v-else class="count">List is empty</div>
</template>

<style scoped>
.count {
    margin: 24px auto;
}

.loading {
    text-align: center;
    padding: 20px;
}

.task-form {
    display: flex;
    margin-bottom: 20px;
}

.task-form input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 10px;
    border-radius: 8px;
    outline: none;
}
</style>
