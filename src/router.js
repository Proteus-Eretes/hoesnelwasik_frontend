import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import IframeView from "./views/IframeView";

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/iframe',
            name: 'IframeView',
            component: IframeView
        }
    ]
});
