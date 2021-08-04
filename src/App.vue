<template>
  <main-nav
    mail="alexgeov@mail.com"
    _name="Alex Geovanny"
  />
</template>

<script>
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