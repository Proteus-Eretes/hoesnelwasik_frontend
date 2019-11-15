import Vue from 'vue';
import Router from 'vue-router';
import RegattaView from './Views/RegattaView';
import CrewDrawView from './Views/CrewDrawView';
import CrewResultsView from './Views/CrewResultsView';
import CrewSearchView from './Views/CrewSearchView';

Vue.use(Router);

const customProps = iframe => type => route => {
    const params = route.params;
    params.target = params.target ? params.target : type;
    params.iframe = iframe;
    return params;
};

const customIframeProps = customProps(true);
const customPropsFn = customProps(false);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/:match/:year?/:target?',
            name: 'regattaView',
            component: RegattaView,
            props: customPropsFn('uitslagen')
        },
        {
            path: '/:match/:year/loting/:field',
            name: 'CrewDrawView',
            component: CrewDrawView,
            props: customPropsFn('loting')
        },
        {
            path: '/:match/:year/uitslagen/:field',
            name: 'CrewResultsView',
            component: CrewResultsView,
            props: customPropsFn('uitslagen')
        },
        {
            path: '/:match/:year/search/:field',
            name: 'CrewSearchView',
            component: CrewSearchView,
            props: customPropsFn('search')
        },
        {
            path: '/:match/:year/club/:field',
            name: 'IframeCrewClubView',
            component: CrewSearchView,
            props: customPropsFn('club')
        },
        {
            path: '/iframe/:match/:year?/:target?',
            name: 'regattaView',
            component: RegattaView,
            props: customIframeProps('uitslagen')
        },
        {
            path: '/iframe/:match/:year/loting/:field',
            name: 'CrewDrawView',
            component: CrewDrawView,
            props: customIframeProps('loting')
        },
        {
            path: '/iframe/:match/:year/uitslagen/:field',
            name: 'CrewResultsView',
            component: CrewResultsView,
            props: customIframeProps('uitslagen')
        },
        {
            path: '/iframe/:match/:year/search/:field',
            name: 'CrewSearchView',
            component: CrewSearchView,
            props: customIframeProps('search')
        },
        {
            path: '/iframe/:match/:year/club/:field',
            name: 'IframeCrewClubView',
            component: CrewSearchView,
            props: customIframeProps('club')
        }
    ]
});
