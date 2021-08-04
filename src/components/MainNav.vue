<template>
    <aside class="main__nav main-nav">
            <a href="./" class="main-nav__logo logo">
                <object type="image/svg+xml" :data="Logo" class="logo__icon">
                    Your browser does not support SVG
                 </object>
                 <SvgSprite symbol="text" size="0 0 110 33" class="logo__text"></SvgSprite>
            </a>
            
            <avatar></avatar>
            
            <h2 class="main-nav__name"> {{ _name }} </h2>

            <a :href="mail_link" class="main-nav__email">
                <!-- mailto:alexgeov@mail.com -->
                {{mail}}
            </a>

            <nav-list :items="navListItems">main menu</nav-list>

            <p class="main-nav__dashboard-name">Kamr Hotel Admin Dashboard</p>
            <p class="main-nav__copy">&copy; 2021 All Rights Reserved</p>
            <p class="main-nav__autors-salute">Made with &#9829; by Peterdraw</p>
        </aside>
</template>

<script>
import NavList from "./NavList.vue";
import Avatar from "./Avatar.vue";
import Logo from "@/assets/icon.svg";
import { SvgSprite } from 'vue-svg-sprite';


export default {
    name: "main-nav",
    components: {
        NavList,
        SvgSprite,
        Avatar,
    },
    data() {
        return {
            navListItems: ['dashboard', 'booking', 'guest', 'concierge', 'rooms', 'settings'],
        }
    },
    props: [
        'mail',
        '_name',
    ],

    computed: {
        mail_link() {
            return "mailto:" + this.mail;
        },
    },

    setup() {
        return {
            Logo,
        };
    },
}
</script>