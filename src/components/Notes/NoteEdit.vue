<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()

const noteId = route.params.id

onMounted(() => {
    console.log(noteId)
})

</script>

<template>
    <div>This is note edit view</div>
</template>