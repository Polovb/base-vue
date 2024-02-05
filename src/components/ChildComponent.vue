<template>
    <div class="component q-pa-md">
        <div>
            <strong>Child component</strong>
        </div>
        Parent state accessed from child component:
        <q-badge>{{ parentState }}</q-badge>
    </div>
</template>
<script setup lang="ts">
import { inject } from "vue";
import { injectionKey } from "../injectionKeys";

const parentState = inject(injectionKey);
</script>
<style scoped>
.component {
    border: 2px dashed hsl(0, 0%, 90%);
}
</style>
