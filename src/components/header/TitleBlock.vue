<template>
    <div class="title-block">
        <div class="title-block__headers">
            <h3 class="title-block__title">
            <slot name="title"></slot>
            </h3>
            <h4 class="title-block__subtitle">
            <slot name="sub-title"></slot>
            </h4>
        </div>
        
        <div class="title-block__search">
            <input type="text" :class="{'title-block__input':true,  'title-block__input--visible':visibleSearch}">
            <button @click="showInput" class="title-block__search-button">
                <SvgSprite size="0 0 24 24" symbol="search" class="title-block__icon"></SvgSprite>
            </button>
        </div>

        <div class="title-block__notifications">
            <div class="title-block__notification title-block__notification--noted">
                <SvgSprite size="0 0 24 24" symbol="notification" class="title-block__icon"></SvgSprite>
            </div>
            <div class="title-block__notification">
                <SvgSprite size="0 0 24 24" symbol="email" class="title-block__icon"></SvgSprite>
            </div>
        </div>
        <div class="title-block__calendar">
            <SvgSprite viewBox="0 0 24 24" symbol="booking" class="title-block__calendar-icon"></SvgSprite>
            <input class="title-block__calendar-input" type="text" v-model="getDate">
        </div>
        <custom-select
            :items="locales"
            :uppercase="true"
            @change="getSelect"
            class="title-block__select"></custom-select>
    </div>
</template>

<script>
    import { SvgSprite } from 'vue-svg-sprite';
    import CustomSelect from '../subComponents/CustomSelect.vue';
    export default {
        
        name:"title-block",    
        components: {
            SvgSprite,
            CustomSelect,
        },

        emits: [
            "changeLocale",
        ],

        data() {
            return {
                visibleSearch: false,
                date: new Date(),
                locales: [
                    {name: "en", value:{locale: "en", region: "US"}}, 
                    {name: "uk", value:{locale: "uk", region: "UA"}}, 
                    {name: "ru", value:{locale: "ru", region: "RU"}}, 
                    ],
                locale: null,
            };
        },

        methods: {
            getSelect(event) {
                this.locale = event;
                this.$emit("changeLocale", this.locale.locale + "-" + this.locale.region);
            },

            showInput() {
                this.visibleSearch = !(this.visibleSearch);
            },
        },

        computed: {
            getDate() {
                return this.format.format(this.date);
            },
            format() {
                const locale = `${this.locale.locale}-${this.locale.region}`;
                const options = {
                    dateStyle: "long",
                };
                return new Intl.DateTimeFormat(locale, options);
            },
        },

        created() {
            this.locale = this.locales[0].value;
        },

    }
</script>

<style lang="scss">
    .title-block {
        display: flex;
        padding: 30px 50px;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 1000px) {
            flex-wrap: wrap;
        }

        &__headers {
            margin-right: 10px;


            @media screen and (max-width: 800px) {
                order: 8;
                width: 65%;
            }

            @media screen and (max-width: 490px) {
                width: 100%;
            }
        }

        &__title {
            font-size: 32 / 16 * 1rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        &__subtitle {
            font-size: 14 / 16 * 1rem;
            color: $menu-color;

            @media screen and (max-width: 1300px) {
                display: none;
            }
        }

        &__search {
            flex: 1 1 auto;
            position: relative;
            margin-right: 10px;

            @media screen and (max-width: 1000px) {
                width: 100%;
                order: 10;
                margin: 0 auto;
            }
        }

        &__input {
            width: 100%;
            background: $border-color;
            color: $text-color;
            height: 54px;
            border-radius: 14 / 16 * 1rem;
            border: none;
            font-size: 15 / 16 1rem;
            padding: 5px 15px;
            transition: transform 0.25s;
            transform-origin: right top;
            transform: scaleX(0);


            &--visible {
                transform: scaleX(1);
            }
        }

        &__search-button {
            position: absolute;
            right: 5%;
            top: 50%;
            border: none;
            background: transparent;
            transform: translate(-50%, -50%);
            cursor: pointer;
            transition: color 0.25s;
            color: $text-color;

            &:hover {
                color: $local-orange;
            }
        }

        &__notifications {
            display: flex;
            max-width: 110px;
            width: 6%;
            justify-content: space-between;
            align-items: center;

            @media screen and (max-width: 1000px) {
                width: 80px;
                margin: 0 20px 0 auto;
            }
        }

        &__notification {

            position: relative;
            cursor: pointer;

            &--noted {
                &::after {
                    display: block;
                    content: "";
                    position: absolute;
                    top: 0;
                    right: -15%;
                    background-color: $local-orange;
                    border-radius: 50%;
                    width: 14px;
                    height: 14px;
                    border: 2px solid $base-background;
                }
            }
        }


        &__icon {
            width: 24px;
        }

        &__calendar {
            position: relative;
            display: flex;
            align-items: center;
            max-width: 252px;
            border: 1px solid $border-color;
            border-radius: 14 / 16 * 1rem;
            height: 48px;
            margin: auto 10px;

            @media screen and (min-width: 1910px) {
                width: 252px;
                margin: auto 16px auto 60px;
            }


            @media screen and (max-width: 1000px) {
                width: 60px;
            }

            @media screen and (max-width: 800px) {
                order: 9;
                width: 30%;
                margin: 0;
            }

            @media screen and (max-width: 490px) {
                display: none;
            }
        }

        &__calendar-icon {
            position: absolute;
            top: 50%;
            left: 32 / 252 * 100%;
            transform: translate(-50%, -50%);
            width: 20px;
            color: $local-orange;

            
            @media screen and (max-width: 1000px) and (min-width: 800px) {
                left: 50%;
            }

            @media screen and (max-width: 800px) {
                left: 0;
            }
        }

        &__calendar-input {
            width: 100%;
            font-family: "Poppins", sans-serif;
            border: none;
            text-align: center;
            font-size: 14 / 16 * 1rem;
            background: transparent;
            color: $text-color;

            @media screen and (max-width: 1400px) {
                padding: 15px 15px;
            }

            @media screen and (max-width: 1000px) and (min-width: 800px){
                display: none;
            }

            @media screen and (max-width: 800px) {
                font-size: 12 / 16 * 1rem;
                padding: 10px;
            }
        }

        &__select {
            width: 82px;
            height: 48px;
        }
    }
</style>

