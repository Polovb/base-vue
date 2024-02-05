<!-- This is to test the computed proxy getter / setter -->
<template>
    <!-- <q-input
        outlined
        :label="props.label"
        :placeholder="props.placeholder"
        :modelValue="modelValue.bar.foo.someOtherThing"
        @update:modelValue="
            $emit(
                'update:modelValue',
                dot.object({ ...modelValue, 'bar.foo.someOtherThing': $event })
            )
        "
    />
    <q-input
        outlined
        :label="props.label"
        :placeholder="props.placeholder"
        :modelValue="modelValue.bar.foo.someOtherThing"
        @update:modelValue="
            $emit('update:modelValue', {
                ...modelValue,
                bar: {
                    ...modelValue.bar,
                    foo: {
                        ...modelValue.bar.foo,
                        someOtherThing: $event,
                    },
                },
            })
        "
    /> -->
    <q-input
        outlined
        :label="props.label"
        :placeholder="props.placeholder"
        v-model="localValue.bar.foo.someOtherThing"
        v-on="listeners"
    />
    <!-- @update:modelValue="emit('update:modelValue', localValue)" -->
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    modelValue: {
        bar: {
            foo: {
                someOtherThing: string;
            };
        };
    };
    label: string;
    placeholder?: string;
}>();

const localValue = ref(props.modelValue);

const listeners = {
    "update:modelValue": () => {
        emit("update:modelValue", localValue.value);
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
