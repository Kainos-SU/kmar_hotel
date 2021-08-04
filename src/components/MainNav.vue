<template>
    <aside class="main__nav main-nav">
            <a href="./" class="main-nav__logo logo">
                <object type="image/svg+xml" :data="icon" class="logo__icon">
                    Your browser does not support SVG
                 </object>
                 <svg width="110" height="33" viewBox="0 0 110 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo__text">
                    <use :href="svg_text">
                        <!-- ./svg/sidebar/kamr.svg#text -->
                    </use>
                </svg>
            </a>
            
            <div class="main-nav__avatar avatar">
                <div class="avatar__main-circle">
                    <div class="avatar__segment"></div>
                    <div class="avatar__segment"></div>
                    <div class="avatar__segment"></div>
                    <div class="avatar__avatar"></div>
                </div>
                <div class="avatar__edit">
                    <svg class="avatar__edit-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <use :href="svg_pencil">
                            <!-- ./svg/sidebar/sprite_base_icon.svg#pencil -->
                        </use>
                    </svg>
                </div>

            </div>
            
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
export default {
    name: "main-nav",
    components: {
        NavList,
    },
    data() {
        return {
            navListItems: ['dashboard', 'booking', 'guest', 'concierge', 'rooms', 'settings'],
        }
    },
    props: [
        'icon',
        'svg_text',
        'svg',
        'mail',
        '_name',
    ],

    computed: {
        svg_pencil() {
            return this.svg + "#pencil";
        },
        mail_link() {
            return "mailto:" + this.mail;
        },
    }
}
</script>