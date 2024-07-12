<template>
    <div>
        <div class="q-mb-md row justify-end">
            <q-btn
                unelevated
                color="grey-3"
                text-color="grey-10"
                square
                @click="() => push('')"
                >Add</q-btn
            >
        </div>
        <div
            v-for="(field, fieldIndex) in fields"
            :key="field.key"
            class="row items-start mb-2"
        >
            <!-- fieldIndex:{{ fieldIndex }} field.key:{{ field.key }} -->
            <div class="row items-center w-full gap-2">
                <ValidatedField :name="`bananas[${fieldIndex}]`">
                    <ValidatedFieldRenderComponent
                        class="flex-grow"
                        label="Banana's name"
                    />
                </ValidatedField>
                <q-btn
                    unelevated
                    flat
                    dense
                    round
                    size="10px"
                    text-color="grey-10"
                    @click="remove(fieldIndex)"
                >
                    <q-icon name="delete" />
                </q-btn>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ValidatedField from "./ValidatedField.vue";
import ValidatedFieldRenderComponent from "./ValidatedFieldRenderComponent.vue";
import { useValidatedFieldArray } from "../hooks/validation";
const { push, remove, fields } = useValidatedFieldArray();
</script>
