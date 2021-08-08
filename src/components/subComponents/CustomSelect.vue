<template>
    <div class="custom-select">
        <select class="custom-select__select" v-model="selected">
            <option
                class="custom-select__option"
                v-for="(item, index) in items"
                :key="index"
                :value="item.value">
                    {{uppercase ? item.name.toUpperCase() : item.name}}
                </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "custom-select",

    emits: [
        "change"
    ],
    
    props: {
        items: {
            required: true,
            type: Array,
        },
        uppercase: {
            type: Boolean
        },
    },
    
    data() {
        return {
            selected: null,
        };
    },

    created() {
        this.selected = this.items[0].value;
    },

    watch: {
        selected(curent) {
            this.$emit("change", curent);
        },
    }
}
</script>

<style lang="scss">
    .custom-select {

        position: relative;
        display: flex;
        align-items: center;

        &::before,
        &::after {
            content: "";
            display: block;
            position: absolute;
            width: 12 / 16 * 1rem;
            height: 3 / 16 * 1rem;
            background: #C1C1C1;
            right: 20px;
            top: 50%;
            pointer-events: none;
        }

        &::before {
            transform: translate(0, 100%) rotate(45deg);
        }

        &::after {
            transform: translate(50%, 100%) rotate(-45deg);
        }

        &__select {
            width: 100%;
            min-height: 100%;
            border: 1px solid $border-color;
            border-radius: 14px;
            color: $text-color;
            background: $base-background;
            font-size: 14 / 16 * 1rem;
            padding: 15px 15px 15px 20px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            cursor: pointer;
        }
    }
</style>

