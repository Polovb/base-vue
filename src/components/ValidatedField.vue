<template>
    <div
        class="border-2 border-dashed rounded-md border-slate-400 mb-2 p-1 flex-grow"
    >
        <div class="font-mono text-xs/none">
            <span class="bg-blue-200 text-blue-700 rounded-sm">
                {{`<ValidatedField.vue />`}} — name="{{ name }}"
            </span>
        </div>
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { provideValidatedField } from "../hooks/validation";

const props = defineProps<{
    name: string;
}>();

provideValidatedField(() => ({
    name: props.name,
}));
</script>
