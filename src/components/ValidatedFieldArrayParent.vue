<template>
    <slot />
</template>

<script lang="ts" setup>
import { provideValidatedFieldArray } from "../hooks/validation";

const props = defineProps<{
    name: string;
}>();

provideValidatedFieldArray(() => ({
    name: props.name,
}));
</script>
