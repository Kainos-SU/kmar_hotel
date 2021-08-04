<template>
    <nav class="main-nav__nav nav-list">
        <h3 class="nav-list__header"><slot></slot></h3>
        <ul class="nav-list__list">
            <li class="nav-list__pointer"></li>
            <li class="nav-list__item" v-for="(item, index) in items" :key="index">
                <a class="nav-list__anchor" href="">
                    <SvgSprite :symbol="item" size="0 0 24 24" class="nav-list__icon"></SvgSprite>
                    <!-- <svg><use xlink:href="#dashboard"></use></svg> -->
                    <span class="nav-list__text-title">{{item}}</span>
                </a>
            </li>

        </ul>
    </nav>
</template>

<script>
    import { SvgSprite } from 'vue-svg-sprite'
    export default {
        name: "nav-list",
        props: {

            items: {
                type:Array,
                required:true,
            },
        },
        components: {
            SvgSprite,
        },
    }
</script>