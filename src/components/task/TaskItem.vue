<script setup lang="ts">
import type {ITask} from "../../types/task.ts";

defineProps<{
    task: ITask;
}>()

defineEmits<{
    toggle: [id: number];
    delete: [id: number];
}>()
</script>

<template>
    <div class="task-item" :class="{ completed: task.completed }">
        <input
            type="checkbox"
            :checked="task.completed"
            @change="$emit('toggle', task.id)"
        />
        <span class="task-title">{{ task.title }}</span>
        <button @click="$emit('delete', task.id)" class="delete-btn">×</button>
    </div>
</template>

<style scoped>
.task-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.task-item.completed .task-title {
    text-decoration: line-through;
    color: #999;
}

.task-title {
    flex-grow: 1;
    margin: 0 10px;
}

.delete-btn {
    background: none;
    border: none;
    color: #ff5252;
    font-size: 1.2em;
    cursor: pointer;
}

.delete-btn:hover {
    color: #ff0000;
}
</style>
