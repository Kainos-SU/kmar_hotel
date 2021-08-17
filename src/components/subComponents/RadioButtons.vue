<template>
    <ul class="filters-list">
        
        <li class="filters-list__item" v-for="(item, index) in names" :key="index">
            <label class="filters-list__label" @click="checked(index)">
                <input class="filters-list__input" type="radio" :name="groop" :checked="index === 0">
                <span class="filters-list__mark">{{item}}</span>
            </label>
        </li>
    </ul>
</template>

<script>
export default {
    name: "RadioButtons",

    props: {
        names: {
            type: Array,
            required: true,
        },

        groop: {
            type: String,
            required: true,
        },
    },

    emits: [
        "seted"
    ],

    methods: {
        checked(index) {
            this.$emit("seted", index);
        }
    },
}
</script>

<style lang="scss">
    .filters-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 339px;

        &__item {
            flex: 0 1 auto;
            width: 100%;
            
           
            transition: color 0.25s;
            color: $menu-color;

            &:hover {
                color: $text-color;
            }
        }

        &__label {
            display: block;
            width: 100%;
            display: flex;
            align-items: center;
        }

        &__mark {
            width: 100%;
            border-radius: 14px;
            font-size: 14 / 16 * 1rem;
            color: inherit;
            font-weight: 500;
            text-transform: capitalize;
            transition: color 0.25s;
            height: 53px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }

        &__input {
            appearance: none;
        }

        &__input:checked + &__mark {
            color: $text-color;
            border: 1px solid $border-color;
        }
    }
</style>