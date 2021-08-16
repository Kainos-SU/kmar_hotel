<template>
    <div :class="{'consierge-card':true, 'consierge-card--inactive':!consierge.active}">
        <div class="consierge-card__avatar" :style="{'background-color':consierge.image?'transparent':''}">
            <img v-if="consierge.image" :src="consierge.image" alt="" class="consierge-card__image">
        </div>
        <h4 class="consierge-card__name">{{consierge.name}}</h4>
        <p class="consierge-card__id">{{consierge.id}}</p>
        <div class="consierge-card__icons">
            <a href="#" class="consierge-card__icon">
                <SvgSprite class="consierge-card__icon-svg" symbol="booking" viewBox="0 0 24 24" width="23" height="23"></SvgSprite>
            </a>
            <a :href="'tel:' + consierge.tel" class="consierge-card__icon">
                <SvgSprite class="consierge-card__icon-svg" symbol="phone" size="0 0 23 23"></SvgSprite>
            </a>
            <a href="#" class="consierge-card__icon">
                <span class="consierge-card__dot"></span>
                <span class="consierge-card__dot"></span>
                <span class="consierge-card__dot"></span>
            </a>
        </div>
        <div class="consierge-card__join">Join at {{join}}</div>
        <div class="consierge-card__desc-title">job desc</div>
        <div class="consierge-card__desc">{{consierge.desc}}</div>

    </div>
</template>

<script>
    import { SvgSprite } from 'vue-svg-sprite';
    export default {
        components: {
            SvgSprite,
        },

        props: {
            consierge: {
                required: true,
            }
        },

        computed: {
            join() {
                const date = this.consierge.join;
                const format = Intl.DateTimeFormat("en-US",{
                    year: "numeric",
                    month: "long",
                    // day: "2-digit",
                    // dateStyle: "long",
                });
                return format.format(date);
            },
        },
        
    }
</script>

<style lang="scss">
    .consierge-card {
        min-height: 100%;
        padding: 30px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
        border-radius: 24px;
        transition: box-shadow 0.25s;
        background-color: $secondary-background;

        &:hover {
            box-shadow: 0px 22px 47px rgba(0, 0, 0, 0.08);
        }

        &__avatar {
            margin: 0 auto 15px;
            border-radius: 50%;
            position: relative;
            width: 38%;
            overflow: hidden;
            background-color: $grey-playceholder;

            &::before {
                width: 100%;
                content: "";
                display: block;
                padding-top: 100%;
            }
        }

        &__image {
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        &__name {
            text-transform: capitalize;
            text-align: center;
            margin: 0 auto 5px;
            font-size: 24 / 16 * 1rem;
            font-weight: 500;
        }

        &__id {
            font-size: 14 / 16 * 1rem;
            color: $menu-color;
            text-align: center;
            margin-bottom: 10px;
        }

        &__icons {
            width: 234 / 340 * 100%;
            display: flex;
            margin: 0 auto;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;


            @media screen and (max-width: 620px) {
                width: 100%;
                max-width: 230px;
            }
        }

        &__icon {
            display: block;
            position: relative;
            width: 58 / 234 * 100%;
            color: $local-green;
            background-color: rgba($local-green,0.15);
            border-radius: 50%;
            transition: color 0.25s, background-color 0.25s;

            &:last-child {
                background-color: $border-color;
                color: $menu-color;

                &:hover {
                    background-color: $local-grey;
                }
            }

            &:hover {
                color: white;
                background-color: $local-green;
            }
            
            &::before {
                display: block;
                content: "";
                padding-top: 100%;
            }
        }

        &__icon-svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 23 / 58 * 100%;
        }

        &__dot {
            width: 4px;
            height: 4px;
            background-color: currentColor;
            border-radius: 50%;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &:first-child {
                left: calc(50% - 5px);
            }

            &:last-child {
                left: calc(50% + 5px);
            }

        }

        &__join {
            font-size: 14 / 16 * 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;

            &::after {
                content: "active";
                text-transform: capitalize;
                color: $local-green;
                margin-left: 8%;
            }
        }

        &--inactive &__join {
            font-size: 13 / 16 * 1rem;
            &::after {
                content: "inactive";
                color: $local-grey;
            }
        }

        &__desc-title {
            font-size: 12 / 16 * 1rem;
            color: $menu-color;
            margin-bottom: 8px;
            text-transform: capitalize;
        }

        &__desc {
            font-size: 14 / 16 * 1rem;
        }

    }
</style>