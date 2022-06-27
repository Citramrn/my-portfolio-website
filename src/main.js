import Vue from "vue";
import App from "./App.vue";
//import VueRouter from '.vue-router'
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import VueDarkMode from "@growthbunker/vuedarkmode"
import '../node_modules/vue-slick-carousel/dist/vue-slick-carousel.common'
import "../node_modules/vue-slick-carousel/dist/vue-slick-carousel.umd"
import VueSlickCarousel from 'vue-slick-carousel'
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';
import router from './router'
Vue.component(
    CursorFx.name,
    CursorFx,
    'VueSlickCarousel', VueSlickCarousel
);

Vue.config.productionTip = false;

new Vue({
    router,
    VueDarkMode,
    //VueRouter,
    render: function (h) {
        return h(App);
    }
}).$mount("#app");
Vue.use(
    CursorFx
);
