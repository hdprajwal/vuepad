<script setup lang="ts">
import { watch } from 'vue'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extensions'
import { ListKit } from '@tiptap/extension-list'
import { useEditor, EditorContent } from '@tiptap/vue-3'

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    editable: {
        type: Boolean,
        default: true,
    },
})

const emit = defineEmits(['update:modelValue', 'update:text'])

const editor = useEditor({
    extensions: [StarterKit, Placeholder.configure({
        placeholder: 'Write something...',
    }), ListKit],
    content: props.modelValue,
    onUpdate: ({ editor }) => {
        emit('update:modelValue', editor.getHTML())
        emit('update:text', editor.getText())
    },
    editable: props.editable,
})

watch(() => props.modelValue, (value) => {
    if (!editor.value) return

    const isSame = editor.value.getHTML() === value

    if (isSame) {
        return
    }

    editor.value.commands.setContent(value)
})
</script>


<template>
    <EditorContent :editor="editor" />
</template>
