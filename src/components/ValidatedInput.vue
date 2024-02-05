<template>
    <q-input
        v-model="value"
        outlined
        :label="label"
        :error="!!errors?.length"
        :error-message="errorMessage"
    />
    {{ errorMessage }}
</template>

<script lang="ts" setup>
import { useField } from "vee-validate";

const props = defineProps({
    name: String,
    label: String,
    type: String,
});

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage, errors, meta, name } = useField(() => props.name);
</script>
