<template>
    <div :class="{'consierge-card':true, 'consierge-card--inactive':!consierge.active}">
        <div class="consierge-card__avatar">
            <img v-if="consierge.image" :src="consierge.image" alt="" class="consierge-card__image">
        </div>
        <h4 class="consierge-card__name">{{consierge.name}}</h4>
        <p class="consierge-card__id">{{consierge.id}}</p>
        <div class="consierge-card__icons">
            <a href="#" class="consierge-card__icon">
                <SvgSprite symbol="booking" viewBox="0 0 24 24"></SvgSprite>
            </a>
            <a :href="'tel:' + consierge.tel" class="consierge-card__icon">
                <SvgSprite symbol="phone" size="0 0 23 23"></SvgSprite>
            </a>
            <a href="" class="consierge-card__icon">
                <span class="consierge-card__dot"></span>
                <span class="consierge-card__dot"></span>
                <span class="consierge-card__dot"></span>
            </a>
            <div class="consierge-card__join">Join at {{join}}</div>
            <div class="consierge-card__desc-title">job desc</div>
            <div class="consierge-card__desc">{{consierge.desc}}</div>
        </div>

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
                    // year: "numeric",
                    // month: "short",
                    // day: "2-digit",
                    dateStyle: "long",
                });
                return format.format(date);
            },
        },
        
    }
</script>

<style lang="scss">
    .consierge-card {
        min-width: 340px;
        width: 22%;
        padding: 30px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
        border-radius: 24px;
        transition: box-shadow 0.25s;

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

        &__icon {
            position: relative;
            width: 26%;
        }

        &__dot {
            width: 4px;
            height: 4px;
            background-color: $menu-color;
            border-radius: 50%;
            display: block;
        }

    }
</style>