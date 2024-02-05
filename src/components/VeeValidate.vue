<template>
    <pre>Vee Validate</pre>
    <q-input
        v-model="email"
        outlined
        placeholder="Enter your email"
        label="Email"
        bottom-slots
        v-bind="attrs"
        v-on="handlers"
    >
        <template #error>
            <strong>
                <em>
                    {{ errors.email }}
                </em>
            </strong>
        </template>
    </q-input>
    <!-- <pre>{{ values }}</pre>
    <pre>{{ errors }}</pre> -->
</template>
<script setup lang="ts">
import { useValidation } from "../hooks/validation";
import { z } from "zod";

const { attrs, handlers, values, errors, email } = useValidation(
    z.object({
        email: z.string().email(),
    })
);
</script>

<style scoped>
pre {
    min-width: 500px;
    text-align: left;
}
</style>
