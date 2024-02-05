<template>
    <div class="component q-pa-lg">
        <div>
            <strong>Parent component</strong>
        </div>
        <div>
            Parent state: <q-badge>{{ parentState }}</q-badge>
        </div>
        <q-btn
            color="grey-4"
            text-color="grey-9"
            class="q-mt-sm"
            unelevated
            @click="parentState++"
            >Increment parent state</q-btn
        >
        <ChildComponent class="q-mt-md" />
    </div>
</template>
<script setup lang="ts">
import { provide, readonly, ref } from "vue";
import ChildComponent from "./ChildComponent.vue";
import { injectionKey } from "../injectionKeys";
const parentState = ref(0);
provide(injectionKey, readonly(parentState));
</script>
<style scoped>
.component {
    border: 2px dashed hsl(0, 0%, 90%);
}
</style>
