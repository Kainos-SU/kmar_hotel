<template>
    <nav class="main-nav__nav nav-list">
        <h3 class="nav-list__header"><slot></slot></h3>
        <ul class="nav-list__list">
            <li class="nav-list__pointer"></li>
            <li class="nav-list__item" v-for="(item, index) in items" :key="index">
                <a class="nav-list__anchor" href="">
                    <!-- <svg class="nav-list__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use href="./svg/sidebar/sprite_base_icon.svg#dashboard"></use>
                    </svg> -->
                    <span class="nav-list__text-title">{{item}}</span>
                </a>
            </li>

        </ul>
    </nav>
</template>

<script>
export default {
    name: "nav-list",
    props: {

        items: {
            type:Array,
            required:true,
        },
    },
}
</script>