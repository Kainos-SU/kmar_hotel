<template>
  <main-nav
    icon="./svg/icon.svg"
    svg_text="./svg/kamr.svg#text"
    mail="alexgeov@mail.com"
    svg="./svg/sprite_base_icon.svg"
    _name="Alex Geovanny"
  />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainNav from "./components/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>

<style lang="scss">
    a {
        color: inherit;
    }
</style>