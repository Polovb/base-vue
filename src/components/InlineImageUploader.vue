<template>
    <div class="image-and-uploader-container">
        <img
            ref="imgElement"
            v-if="imgUrl"
            :src="imgUrl"
            alt=""
            class="image"
        />
        <div
            v-else
            :class="['uploader', { 'is-dragging': isDragging }]"
            @dragenter="dragenter"
            @dragleave="dragleave"
            @drop="drop"
        >
            <div class="label-container">
                Drag and drop files here or
                <label class="label" :for="uploaderId">browse</label>
            </div>
            <!-- @drag.prevent="drag" -->
            <input
                type="file"
                :id="uploaderId"
                ref="fileUploader"
                @change="fileChange"
                class="file-uploader"
            />
        </div>
    </div>
    <div class="q-mt-sm row justify-center" style="gap: 4px">
        <q-btn unelevated outline @click="rotate"
            ><q-icon name="refresh"
        /></q-btn>
        <q-btn unelevated outline @click="crop"><q-icon name="crop" /></q-btn>
        <q-btn unelevated outline @click="move"
            ><q-icon name="open_with"
        /></q-btn>
        <q-btn unelevated outline @click="reset">Reset</q-btn>
    </div>
</template>
<script setup lang="ts">
import { nextTick, ref } from "vue";
import "cropperjs/dist/cropper.css";
import CropperJs from "cropperjs";
const uploaderId = crypto.randomUUID();

const imgUrl = ref("");
const fileUploader = ref<HTMLInputElement | null>(null);
const imgElement = ref<HTMLImageElement>();
const cropperInstance = ref<CropperJs>();

const URL = window.URL || window.webkitURL;
const REGEXP_MIME_TYPE_IMAGES = /^image\/\w+$/;
// const REGEXP_URLS = /^(?:https?|data):/;

type FileData = {
    loaded: boolean;
    name: string;
    type: string;
    url: string;
};

const isDragging = ref(false);
function dragenter() {
    isDragging.value = true;
}

function drop(e: DragEvent) {
    console.log("drop", e);
    handleFiles(e);
    isDragging.value = false;
}

function fileChange(e: Event) {
    console.log("fileChange", e);
}

async function handleFiles(e: DragEvent) {
    const { files } = e.dataTransfer!;

    e.preventDefault();

    console.log(files);

    if (!files || !files.length) {
        return;
    }

    const file = await read(files[0], e);

    if (!file) {
        console.log("no file");
        return;
    }

    imgUrl.value = file.url;

    await nextTick();

    cropperInstance.value = new CropperJs(imgElement.value!, {});
}

function read(file: File, event: DragEvent): Promise<FileData | false> {
    return new Promise((resolve, reject) => {
        if (!file) {
            resolve(false);
            return;
        }

        if (REGEXP_MIME_TYPE_IMAGES.test(file.type)) {
            if (URL) {
                resolve({
                    loaded: true,
                    name: file.name,
                    type: file.type,
                    url: URL.createObjectURL(file),
                });
            } else {
                reject(new Error("Your browser is not supported."));
            }
        } else {
            reject(
                new Error(
                    `Please ${event ? event.type : "choose"} an image file.`
                )
            );
        }
    });
}

function rotate() {
    cropperInstance.value?.rotate(90);
}

function crop() {
    cropperInstance.value?.setDragMode("crop");
}

function move() {
    cropperInstance.value?.setDragMode("move");
}

function reset() {
    cropperInstance.value?.reset();
}

function dragleave() {
    isDragging.value = false;
}
</script>
<style lang="postcss" scoped>
.image-and-uploader-container {
    border: 1px solid #ccc;
    height: 1000px;
    width: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;

    .image {
        max-width: 100%;
        max-height: 100%;
    }
}
.uploader {
    /* border: 1px solid #ccc; */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.is-dragging {
        outline: 4px dashed #ccc;
    }

    .label-container {
        position: absolute;

        .label {
            color: var(--q-primary);
            cursor: pointer;
        }
    }

    .file-uploader {
        border: 1px solid black;
        height: 100%;
        width: 100%;
        /* visibility: hidden; */
        opacity: 0;
        /* appearance: none;
        -webkite-appearance: none; */
    }
}
</style>
