<template>
    <ul class="pages__list" v-show="pageNumbers > 1">
        <li class="pages__item">
            <button
                class="pages__btn pages__btn--text"
                @click="prevPage"
                :disabled="curentPage === 1">
                    previous
            </button>
        </li>
        <template 
            v-for="index in pageNumbers"
            :key="index">
                <li class="pages__item">
                        <button :class="{'pages__btn':true, 'pages__btn--active': index === curentPage}" @click="changePage(index)">
                            {{index}}
                        </button>
                </li>
        </template>
        <li class="pages__item">
            <button
                class="pages__btn pages__btn--text"
                @click="nextPage"
                :disabled="curentPage === pageNumbers">
                    next
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "page-selector",
    props: {
        'pageNumbers': {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            curentPage: 1,
        };
    },

    emits: [
        'pageChange',
    ],

    methods: {
        changePage(index) {
            this.curentPage = index;
        },

        nextPage() {
            if (this.curentPage !== this.pageNumbers) {
                this.curentPage++;
            }
        },

        prevPage() {
            if (this.curentPage !== 1) {
                this.curentPage--;
            }
        },
    },

    watch: {
        curentPage(curent) {
            this.$emit('pageChange', curent - 1);
        }
    },


}
</script>

<style lang="scss">
    .pages{
        &__list {
            display: flex;
            justify-content: flex-end;
            min-height: 46px;
        }

        &__item {
            margin: 0 7px;
        }

        &__btn {
            border: none;
            color: $text-color;
            background-color: $local-orange;
            text-align: center;
            width: 46px;
            height: 100%;
            border-radius: 18px;
            font-size: 14 / 16 * 1rem;
            font-weight: 700;
            font-family: inherit;
            transition: color 0.25s, background-color 0.25s;
            cursor: pointer;

            &:hover:not(&--active):not(&:disabled) {
                background-color: $local-orange-hover;
            }

            &--active {
                color: $local-orange;
                background-color: rgba($local-orange, 0.15);
                cursor: auto;
            }


            &--text {
                width: auto;
                padding: 0 18px;
                color: $local-orange;
                border: 1px solid;
                background-color: transparent;
                text-transform: capitalize;

                &:hover:not(&:disabled) {
                    color: $text-color;
                    background-color: $local-orange;
                }
            }

            &:disabled {
                background-color: rgba($menu-color, 0.2);
                color: $local-grey;
                cursor: not-allowed;
            }
        }
    }
</style>