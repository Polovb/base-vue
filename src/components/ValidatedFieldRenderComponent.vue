<template>
    <div
        class="border-2 border-dashed rounded-md border-slate-400 p-1 flex-grow"
    >
        <div class="font-mono text-xs/none">
            <span class="bg-blue-200 text-blue-700 rounded-sm">
                {{`<ValidatedFieldRenderComponent.vue />`}}
            </span>
        </div>
        <q-input
            v-if="isEditing"
            v-model="value"
            class="grow"
            hide-bottom-space
            :label="label"
            :error="!!errors?.length"
            :error-message="errorMessage"
        />
        <div v-else>
            <div class="tracking-wide text-sm opacity-60">
                {{ label }}
            </div>
            {{ value }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useValidatedField } from "../hooks/validation";

import { useForm } from "../hooks/validation";
const { isEditing } = useForm();

defineProps({
    label: String,
    type: String,
});

const { value, errorMessage, errors } = useValidatedField<string>();
</script>
