<template>
    <div class="w-full flex !flex-nowrap gap-4">
        <div class="basis-1/2 flex-grow">
            <div class="flex items-center justify-between mb-4">
                <q-toggle v-model="isEditing" label="Edit mode" />
                <q-btn square @click="() => resetForm()" unelevated
                    >Reset form</q-btn
                >
            </div>
            <form @submit="onSubmit" class="w-full">
                <ValidatedField name="firstName">
                    <ValidatedInput label="First name" />
                </ValidatedField>
                <ValidatedField name="email">
                    <ValidatedInput type="email" label="email" />
                </ValidatedField>
                <ValidatedFieldArrayParent name="bananas">
                    <ValidatedFieldArrayChildren />
                </ValidatedFieldArrayParent>
                <div
                    class="mt-8 p-2 bg-slate-200 flex justify-end border-t border-slate-400"
                >
                    <q-btn
                        square
                        color="primary"
                        text-color="grey-1"
                        unelevated
                    >
                        Submit
                    </q-btn>
                </div>
            </form>
        </div>
        <div class="basis-1/2">
            <div class="bg-slate-200 p-2">
                <pre>Vee Validate</pre>
                <pre>{{ controlledValues }}</pre>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import ValidatedField from "./ValidatedField.vue";
import ValidatedInput from "./ValidatedInput.vue";
import { provideForm } from "../hooks/validation";
import ValidatedFieldArrayParent from "./ValidatedFieldArrayParent.vue";
import ValidatedFieldArrayChildren from "./ValidatedFieldArrayChildren.vue";
import { z } from "zod";

const { resetForm, isEditing, handleSubmit, controlledValues } = provideForm(
    () => ({
        validationSchema: z.object({
            firstName: z.string(),
            email: z.string().email(),
            bananas: z.array(
                z.string(), //.email()
                // z.object({
                //     name: z.string(),
                // })
            ),
        }),
    }),
);

const onSubmit = handleSubmit((values) => {
    console.log(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
pre {
    text-align: left;
}
</style>
