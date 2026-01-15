<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>
<template>
    <div class="mb-4">
        <h1 class="text-4xl font-bold tracking-tight">{{ title }}</h1>
    </div>
</template>