<template>
    <div class="loader"></div>
</template>

<script>
export default {
    name: "circular-loader",
}
</script>

<style lang="scss">
    .loader {
        display: inline-block;
        width: 84px;
        height: 84px;
        position: absolute;
        inset: 0;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
            content: " ";
            display: block;
            width: 64px;
            height: 64px;
            margin: 8px;
            border-radius: 50%;
            border: 6px solid;
            border-color: $text-color transparent $text-color transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }
    }
    
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>