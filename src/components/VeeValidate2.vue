<template>
    <pre>Vee Validate</pre>
    <pre>{{ controlledValues }}</pre>
    <form @submit="onSubmit">
        <ValidatedInput name="firstName" label="First name" />
        <!-- <ValidatedInput name="lastName" /> -->
        <ValidatedInput name="email" type="email" label="email" />
        <!-- <ValidatedInput name="password" type="password" />
        <ValidatedInput name="passwordConfirm" type="password" /> -->
        <q-btn color="primary" text-color="grey-1" unelevated>Submit</q-btn>
    </form>
</template>
<script setup lang="ts">
import { z } from "zod";

import { useForm } from "vee-validate";
import ValidatedInput from "./ValidatedInput.vue";
import { toTypedSchema } from "@vee-validate/zod";

const { handleSubmit, controlledValues } = useForm({
    validationSchema: toTypedSchema(
        z.object({
            firstName: z.string(),
            email: z.string().email(),
        })
    ),
});

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
pre {
    min-width: 500px;
    text-align: left;
}
</style>
