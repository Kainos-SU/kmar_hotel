<template>
    <aside class="main__nav main-nav">
            <router-link to="/" class="main-nav__logo logo">
                <object type="image/svg+xml" :data="Logo" class="logo__icon">
                    Your browser does not support SVG
                 </object>
                 <SvgSprite symbol="text" size="0 0 110 33" class="logo__text"></SvgSprite>
            </router-link>
            
            <avatar></avatar>
            
            <h2 class="main-nav__name"> {{ _name }} </h2>

            <a :href="mail_link" class="main-nav__email">
                <!-- mailto:alexgeov@mail.com -->
                {{mail}}
            </a>

            <nav-list class="main-nav__nav" :items="navListItems">main menu</nav-list>

            <p class="main-nav__dashboard-name">Kamr Hotel Admin Dashboard</p>
            <p class="main-nav__copy">&copy; 2021 All Rights Reserved</p>
            <p class="main-nav__authors-salute">Made with &#9829; by Peterdraw</p>
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
            Logo,
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

    methods: {
        log(event) {
            console.log(event);
        },
    },
}
</script>

<style lang="scss">
    .logo {
        display: flex;
        align-items: center;

        &__text {
            margin-left: 15px;
        }
    }
    
    .main-nav {
        width: 345px;
        padding: 35px 20px 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: $secondary-background;

        &__logo {
            align-self: center;
            color: $text-color;
            margin-bottom: 44px;
        }

        &__avatar {
            margin-left: 30px;
            margin-bottom: 25px;
        } 
        
        &__name {
            font-weight: 500;
            text-transform: capitalize;
            font-size: 24 / 16 * 1rem;
            margin: 0 auto 8px;
        }

        &__email {
            color: $menu-color;
            font-size: 16 / 16 * 1rem;
            font-weight: 400;
            margin: 0 auto 32px;
            text-decoration: none;
        }

        &__nav {
            margin-bottom: 80px;

            @media screen and (max-height: 940px) {
                margin-bottom: auto;
            }
        }

        &__dashboard-name {
            font-size: 1rem;
            color: $text-color;
            font-weight: 500;
            font-size: 14 / 16 * 1rem;
        }

        &__copy,
        &__authors-salute {
            font-size: 14 / 16 * 1rem;
            color: $menu-color;
            font-weight: 400;
        }
        @media screen and (max-width: 620px) {
            position: relative;
            overflow: visible;
            padding: 2.5%;

            &__logo,
            &__name,
            &__email,
            &__dashboard-name,
            &__copy,
            &__authors-salute,
            &__avatar  {
                display: none;
            }
            
            // &__avatar {
            //     width: 20%;
            //     position: absolute;
            //     margin: auto;
            //     top: 0;
            //     left: 50%;
            //     z-index: 2;
            //     transform: translate(-50%, -50%);
            // }
        }
    }
</style>