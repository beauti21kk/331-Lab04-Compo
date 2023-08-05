<script setup lang="ts">
defineProps({
    resourse: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>
<template>
    <h1>Oop!</h1>
    <h3>The {{resourse}} you're looking for is not here</h3>
    <RouterLink :to="{name: 'event-list'}">Back to home page</RouterLink>
</template>