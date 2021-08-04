import { createApp } from 'vue';
import App from './App.vue';
import { svgSpritePlugin } from 'vue-svg-sprite';
import Sprite from "@/assets/sprite_base_icon.svg";

const app = createApp(App);

app.use(svgSpritePlugin, {url:Sprite, class:""});
app.mount('#app')
