<template>
    <!-- <InlineImageUploader /> -->
    <ProvideInject />
    <!-- <VeeValidate /> -->
    <VeeValidate2 />
    <VModel />
</template>
<script setup lang="ts">
// import InlineImageUploader from "./components/InlineImageUploader.vue";
// import VeeValidate from "./components/VeeValidate.vue";
import VeeValidate2 from "./components/VeeValidate2.vue";
import ProvideInject from "./components/ProvideInject.vue";
import VModel from "./components/VModel.vue";
// import { useQuasar } from "quasar";
// const $q = useQuasar();
// $q.dark.set(true);
</script>

<style scoped>
pre {
    min-width: 500px;
    text-align: left;
}
</style>
