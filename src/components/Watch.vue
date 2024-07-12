<template>
    <div>Computed: {{ foo ? "true" : "false" }}</div>
    <div>Watched: {{ strValue }}</div>
    <q-btn @click="foo = !foo" label="Toggle" />
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const foo = ref(false);

const strValue = ref("initial value");

watch(foo, (value) => {
    strValue.value = value ? "true" : "false";
});
</script>
<style scoped>
.component {
    border: 2px dashed hsl(0, 0%, 90%);
}
</style>
