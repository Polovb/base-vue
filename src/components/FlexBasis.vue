<template>
    <div class="q-mb-sm">
        <code>.el</code> have <code>flex-grow: 0</code>, and
        <code>flex-basis: 100/16% </code>
    </div>
    <div class="flex-basis q-mb-md">
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth"></div>
        <div class="el">And this one can do whatever</div>
    </div>
    <div class="q-mb-sm">
        <code>.el</code> have <code>flex-grow: 1</code>, and
        <code>flex-basis: 100/16% </code>
    </div>
    <div class="flex-basis growth">
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth">
            {{ longStr }}
        </div>
        <div class="el basis-one-sixth"></div>
        <div class="el">And this one can do whatever</div>
    </div>
</template>
<script lang="ts" setup>
const longStr =
    "hey hey hey hey hey heyhey hey hey hey hey heyhey hey hey hey hey hey hey hey hey hey hey hey";
</script>
<style>
.flex-basis {
    display: flex;
    border: 2px dashed indianred;
    gap: 8px;
    max-width: 1000px;
    padding: 8px;
    border-radius: 8px;

    .el {
        border-radius: 8px;
        border: 2px dashed indianred;
        min-height: 100px;
        padding: 8px;
        /* flex-grow: 0; */
        flex-shrink: 1;

        &.basis-one-sixth {
            flex-basis: calc(100% / 16);
        }
    }

    &.growth {
        .el {
            flex-grow: 1;
        }
    }
}
</style>
