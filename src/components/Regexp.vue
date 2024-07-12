<template>
    <div class="q-mb-lg">
        <q-input outlined type="textarea" v-model="textareaValue" />
    </div>
    <pre class="component q-pa-lg">{{ regexp1 }}</pre>
    <pre
        class="component q-pa-lg"
    ><q-btn class="q-mb-md" outline @click="copy">Copy</q-btn><br/>{{ replacedValue }}</pre>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const textareaValue = ref(`
	// TODO Add these back once suggestion/issue ticket for these new blocks have been resolved
	entitySubscriptions: {
		component: defineAsyncComponent({
			loader: () =>
				import(
					'@/components/blocks/types/notifications/entitySubscriptions.vue'
				),
			// loading: null,
			delay: 100,
			errorComponent: Error,
			onError,
			timeout
		}),
		category: 'admin.panel.newBlock.categories.entity',
		icon: 'fal fa-bell'
	},

	qrCode: {
		component: defineAsyncComponent({
			loader: () => import('@/components/blocks/types/QRCode.vue'),
			// loading: null,
			delay: 100,
			errorComponent: Error,
			onError: onComponentError('qrCode'),
			timeout
		}),
		category: 'admin.panel.newBlock.categories.display',
		icon: 'fas fa-qrcode'
	}
`);

// remove component
const regexp1 = /component: defineAsyncComponent\({(.|\n)*?}\),(\n|\t)*/gm;
// remove `defaults`
const regexpDefaults = /optionalPowerUps: {(.|\n)*?},/gm;
const regexp2 = /\n\n/gm;

const replacedValue = computed(() => {
    // return textareaValue.value
    //     .replace(
    //         regexp1,
    //         // "component: defineAsyncComponent({})"
    //         ""
    //     )
    //     .replace(regexp2, "\n");
    return textareaValue.value.replace(
        regexpDefaults,
        // "component: defineAsyncComponent({})"
        ""
    );
});

function copy() {
    navigator.clipboard.writeText(replacedValue.value);
}
</script>
<style scoped>
.component {
    border: 2px dashed hsl(0, 0%, 90%);
}
</style>
