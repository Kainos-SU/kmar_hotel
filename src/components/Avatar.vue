<template>
    <div class="main-nav__avatar avatar">
        <div class="avatar__main-circle">
            <div class="avatar__segment"></div>
            <div class="avatar__segment"></div>
            <div class="avatar__segment"></div>
            <div class="avatar__avatar"></div>
        </div>
        <div class="avatar__edit">
            <SvgSprite symbol="pencil" class="avatar__edit-icon" viewBox="0 0 20 20"></SvgSprite>
        </div>

    </div>
</template>

<script>
    import { SvgSprite } from 'vue-svg-sprite';
    export default {
        name: "avatar",
        components: {
            SvgSprite,
        }
    }
</script>

<style lang="scss">
    .avatar {
        position: relative;
        width: 130 / 345 * 100%;

        &::before {
            content: "";
            width: 100%;
            display: block;
            padding-top: 100%;
        }

        &__main-circle {
            overflow: hidden;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: $local-yelow;
            border-radius: 50%;
        }

        &__segment {
            position: absolute;
            transform-origin: top left;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            background-color: $local-orange;
            transform: rotate(0deg);


            &:nth-child(2) {
                transform: rotate(45deg);
            }

            &:nth-child(3) {
                transform: rotate(270deg);
            }
        }
        
        &__edit {
            position: absolute;
            right: -5%;
            bottom: -8%;
            width: 55 / 135 * 100%;
            height: 55 / 135 * 100%;
            border: 3px solid $base-background;
            border-radius: 50%;
            background-color: $secondary-background;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.25s;
            cursor: pointer;

            &:hover {
                background-color: grey;
            }
        }

        &__edit-icon {
            width: 25 / 50 * 100%;
        }

        &__avatar {
            width: calc(100% - 9px);
            height: calc(100% - 9px);
            border: 4px solid $secondary-background;
            border-radius: 50%;
            overflow: hidden;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: grey;
        }
    }
</style>