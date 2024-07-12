<template>
    <q-input
        v-model="value"
        class="grow"
        dense
        :label="label"
        :error="!!errors?.length"
        :error-message="errorMessage"
    />
</template>

<script lang="ts" setup>
import { useValidatedField } from "../hooks/validation";

defineProps({
    label: String,
    type: String,
});

const { value, errorMessage, errors } = useValidatedField<string>();
</script>
