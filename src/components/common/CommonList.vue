<script setup lang="ts" generic="T extends { id: string | number }">
defineProps<{
    list: T[];
}>()
</script>

<template>
    <ul class="list">
        <li v-for="item in list" :key="item.id">
            <slot :item="item" />
        </li>
    </ul>
</template>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
</style>
