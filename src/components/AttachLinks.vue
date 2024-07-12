<template>
    I'm doing this to add a callback to link clicks.
    <a href="https://finance.yahoo.com/quote/%5EGSPC">Go to link</a>
</template>
<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("click", async (e) => {
            e.preventDefault();
            console.log("Link clicked");
            setTimeout(() => {
                const el = document.createElement("a");
                el.href = e.target.href;
                el.click();
            }, 1000);
        });
    });
});
</script>

<style scoped>
.component {
    border: 2px dashed hsl(0, 0%, 90%);
}
</style>
