<template>
    <div class="custom-search">
        <input type="text" placeholder="Search here..." v-model="searchInput" class="custom-search__input">
        <SvgSprite symbol="search" size="0 0 24 24" class="custom-search__icon"/>
    </div>
</template>

<script>
export default {
    name: "CustomSearch",
    data() {
        return {
            searchInput: "",
        };
    },
    emits: [
        "input",
    ],
    watch: {
        searchInput(curent) {
            this.$emit("input", curent);
        },
    },
}
</script>

<style lang="scss">
    .custom-search {
        position: relative;
        
        &__input {
            width: 100%;
            padding: 15px 24px;
            height: 54px;
            background: $border-color;
            border-radius: 14px;
            color: $text-color;
            border: 1px solid transparent;
            transition: border-color 0.25s;
            outline: none;

            &::placeholder {
                font-weight: 500;
                color: $local-grey;
                opacity: 0.5;
                font-size: 15 / 16 * 1rem;
            }

            &:focus,
            &:focus-visible {
                border-color: $text-color;
            }
        }

        &__icon {
            position: absolute;
            top: 50%;
            right: 20 / 554 * 100%;
            transform: translate(-50%, -50%);
            color: $local-grey;
        }
    }
</style>