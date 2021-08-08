import { createApp } from 'vue';
import App from './App.vue';
import { svgSpritePlugin } from 'vue-svg-sprite';
import Sprite from "@/assets/sprite_base_icon.svg";
import route from "./router";

const app = createApp(App);

app.use(route);
app.use(svgSpritePlugin, {url:Sprite, class:""});
app.mount('#app')
