<template>
  <main-nav
    mail="alexgeov@mail.com"
    _name="Alex Geovanny"
    class="scrolable"
  />

  <div class="main__base">
    <title-block>
      <template v-slot:title>
        {{this.$router.currentRoute.value.name}}
      </template>
      <template v-slot:sub-title>
        Welcome to Kamr! Modern Hotel Admin Dashboard
      </template>
    </title-block>
    <div class="scrolable base-content">
      <div class="container">
        <router-view :config="configure" @config-change="setConfig"></router-view>
        <!-- <settings :config="configure" @config-change="setConfig"></settings> -->
        <!-- <consierge-list></consierge-list> -->
      </div>
    </div>
  </div>
</template>

<script>
import MainNav from "./components/main-nav/MainNav.vue";
import TitleBlock from "./components/header/TitleBlock.vue";
// import Settings from "./components/content/Settings.vue";
// import ConsiergeList from "./components/content/ConciergeList.vue";

export default {
  name: "App",

  data() {
    return {
      configure: [
        {key: "darkMode", value: false, name: "Dark Mode"}
      ],
      root:null,
    };
  },

  components: {
    MainNav,
    TitleBlock,
    // Settings,
    // ConsiergeList,
  },

  methods: {
    getValue (key) {
      const value = this.configure.find(i=>i.key===key);
      return value.value;
    },

    setValue(key, value) {
      const item = this.configure.find(i=>i.key===key);
      if (item) {
        return item[key] = value;
      }
    },
    setConfig (event) {
      this.setValue (event.key, event.value);
    }
  },

  mounted() {
    const main =  document.body;
    const local = window.localStorage.getItem("config");
    if (local === null) {
      window.localStorage.setItem("config", JSON.stringify(this.configure));
    } else {
      this.configure = JSON.parse(local);
    }
    if (this.darkMode === true) {
      main.classList.add("dark");
    } else {
      main.classList.remove("dark");
    }
    this.root = main;
  },

  computed: {
    darkMode () {
      const dark = this.getValue('darkMode');
      return dark;
    }
  },

  watch: {
    darkMode (curent) {
      if(curent) {
        this.root.classList.add("dark");
      } else {
        this.root.classList.remove("dark");
      }
    },

    configure: {
      deep: true,
      handler(current) {
        window.localStorage.setItem("config", JSON.stringify(current));
      },
    },
  }
};
</script>

<style lang="scss">
  @import "@/scss/main.scss";

  .main {
    width: 100vw;
    height: 100vh;
    font-size: 2rem;
    background-color: $base-background;
    color: $text-color;
    display: flex;
    font-family: "Poppins", sans-serif;

    &__nav {
      width: 345 / 1920 * 100%;
      flex: 0 0 18%;
      min-width: 250px;
    }

    &__base {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
    }

    @media screen and (max-width: 620px) {
      flex-direction: column-reverse;

      &__nav {
        width: 100%;
        flex: 1 1 auto;
      }

      &__base {
        width: 100%;
        height: 85%;
        flex: 1 1 85%;
      }
    }
  }

  .base-content {
    flex: 1 1 auto;
    padding-top: 30px;
    position: relative;
  }
</style>