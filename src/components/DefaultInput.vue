<template>
    <q-input
        outlined
        :label="props.label"
        :placeholder="props.placeholder"
        :modelValue="modelValue"
        v-on="model.handlers"
    />
    <!-- @update:model-value="emit('update:modelValue', $event)" -->
</template>
<script setup lang="ts">
const props = defineProps<{
    modelValue: string;
    label: string;
    placeholder?: string;
}>();

const model = {
    handlers: {
        "update:modelValue": (e: any) => {
            emit("update:modelValue", e);
        },
    },
};

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
pre {
    min-width: 500px;
    text-align: left;
}
</style>
