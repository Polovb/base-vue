<template>
    <br />
    <pre>Default input:</pre>
    <DefaultInput label="Email" v-model="email" />
    <br />
    <DefaultInputObj label="Email" v-model="emailObj" />
    <div class="q-my-md">
        <q-btn-toggle
            v-model="btnToggleModel"
            toggle-color="primary"
            multiple
            :options="[
                { label: 'One', value: 'one' },
                { label: 'Two', value: 'two' },
                { label: 'Three', value: 'three' },
            ]"
        />
    </div>
    <pre>Value (string): {{ email }}</pre>
    <pre>Value (obj): {{ emailObj }}</pre>
    <pre>Value (qBtnToggle): {{ btnToggleModel }}</pre>
</template>
<script setup lang="ts">
import { ref } from "vue";
import DefaultInput from "./DefaultInput.vue";
import DefaultInputObj from "./DefaultInputObj.vue";

const btnToggleModel = ref("one");
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
