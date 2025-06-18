<script setup lang="ts" generic="T extends { id: number | string }">
defineProps<{
    tabs: T[];
    modelValue: number | string;
}>()

defineEmits<{
    'update:modelValue': [value: number | string]
}>()
</script>

<template>
    <div class="tabs">
        <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ tab_active: tab.id === modelValue }"
            class="tab"
            @click="$emit('update:modelValue', tab.id)"
        >
            <slot name="tab" :tab="tab" />
        </button>
    </div>
</template>

<style scoped>
.tabs {
    display: flex;
    gap: 8px;
}

.tab_active {
    background: #646cff;
}
</style>
