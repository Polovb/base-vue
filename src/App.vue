<template>
    <q-tabs v-model="tab">
        <q-tab name="flexBasis" label="Flex basis" />
        <q-tab name="attachLinks" label="Attach link" />
        <q-tab name="regexp" label="Regexp" />
        <q-tab name="provide-inject" label="Provide/Inject" />
        <q-tab name="v-model" label="v-model" />
        <q-tab name="vee-validate" label="VeeValidate" />
        <q-tab name="vee-validate2" label="VeeValidate2" />
        <q-tab name="watch" label="Watch" />
    </q-tabs>
    <!-- <InlineImageUploader /> -->
    <q-tab-panels v-model="tab" outlined>
        <q-tab-panel v-model="tab" name="flexBasis" label="Regexp">
            <FlexBasis />
        </q-tab-panel>
        <q-tab-panel v-model="tab" name="attachLinks" label="Regexp">
            <AttachLinks />
        </q-tab-panel>
        <q-tab-panel v-model="tab" name="regexp" label="Regexp">
            <Regexp />
        </q-tab-panel>
        <q-tab-panel v-model="tab" name="provide-inject" label="Provide/Inject">
            <ProvideInject />
        </q-tab-panel>
        <q-tab-panel v-model="tab" name="v-model" label="v-model">
            <VModel />
        </q-tab-panel>
        <q-tab-panel v-model="tab" name="vee-validate" label="VeeValidate">
            <VeeValidate2 />
        </q-tab-panel>
        <q-tab-panel v-model="tab" name="vee-validate2" label="VeeValidate2">
        </q-tab-panel>
        <q-tab-panel v-model="tab" name="watch" label="Watch">
            <Watch />
        </q-tab-panel>
    </q-tab-panels>

    <!-- <VeeValidate /> -->
</template>
<script setup lang="ts">
// import InlineImageUploader from "./components/InlineImageUploader.vue";
// import VeeValidate from "./components/VeeValidate.vue";
import VeeValidate2 from "./components/VeeValidate2.vue";
import AttachLinks from "./components/AttachLinks.vue";
import Watch from "./components/Watch.vue";
import Regexp from "./components/Regexp.vue";
import ProvideInject from "./components/ProvideInject.vue";
import VModel from "./components/VModel.vue";
import { ref } from "vue";
import FlexBasis from "./components/FlexBasis.vue";

const tab = ref("vee-validate");
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
