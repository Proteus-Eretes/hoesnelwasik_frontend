import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import IframeView from './views/IframeView';
import IframeCrewDrawView from './views/IframeCrewDrawView';
import IframeCrewResultsView from './views/IframeCrewResultsView';
import IframeCrewSearchView from './views/IframeCrewSearchView';

Vue.use(Router);

const customProps = type => route => {
    const params = route.params;
    params.target = type;
    return params;
};

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
            path: '/iframe/:match/:year?/:type?',
            name: 'IframeView',
            component: IframeView,
            props: true
        },
        {
            path: '/iframe/:match/:year?/(loting)?',
            name: 'IframeView',
            component: IframeView,
            props: true
        },
        {
            path: '/iframe/:match/:year/loting/:field',
            name: 'IframeCrewDrawView',
            component: IframeCrewDrawView,
            props: true
        },
        {
            path: '/iframe/:match/:year/uitslagen/:field',
            name: 'IframeCrewResultsView',
            component: IframeCrewResultsView,
            props: true
        },
        {
            path: '/iframe/:match/:year/search/:field',
            name: 'IframeCrewSearchView',
            component: IframeCrewSearchView,
            props: customProps('search')
        },
        {
            path: '/iframe/:match/:year/club/:field',
            name: 'IframeCrewClubView',
            component: IframeCrewSearchView,
            props: customProps('club')
        }
    ]
});
