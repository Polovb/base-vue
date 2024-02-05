<template>
    <br />
    <pre>Default input:</pre>
    <DefaultInput label="Email" v-model="email" />
    <br />
    <DefaultInputObj label="Email" v-model="emailObj" />
    <pre>Value (string): {{ email }}</pre>
    <pre>Value (obj): {{ emailObj }}</pre>
</template>
<script setup lang="ts">
import { ref } from "vue";
import DefaultInput from "./DefaultInput.vue";
import DefaultInputObj from "./DefaultInputObj.vue";

const email = ref("");
const emailObj = ref({
    bar: {
        foo: {
            someOtherThing: "value",
        },
    },
});
</script>

<style scoped>
pre {
    min-width: 500px;
    text-align: left;
}
</style>
