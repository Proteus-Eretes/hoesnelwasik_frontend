import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import IframeView from './views/IframeView';
import IframeCrewDrawView from './views/IframeCrewDrawView';
import IframeCrewResultsView from './views/IframeCrewResultsView';

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
            path: '/iframe/:match/:year?/(uitslagen)?',
            name: 'IframeView',
            component: IframeView,
            props: true
        },
        {
            path: '/iframe/:match/:year/:field/loting',
            name: 'IframeCrewDrawView',
            component: IframeCrewDrawView,
            props: true
        },
        {
            path: '/iframe/:match/:year/:field/uitslagen',
            name: 'IframeCrewResultsView',
            component: IframeCrewResultsView,
            props: true
        }
    ]
});
