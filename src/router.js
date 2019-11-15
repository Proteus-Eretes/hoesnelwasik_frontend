import Vue from 'vue';
import Router from 'vue-router';
import IframeView from './Views/IframeView';
import IframeCrewDrawView from './Views/IframeCrewDrawView';
import IframeCrewResultsView from './Views/IframeCrewResultsView';
import IframeCrewSearchView from './Views/IframeCrewSearchView';

Vue.use(Router);

const customProps = iframe => type => route => {
    const params = route.params;
    params.target = params.target ? params.target : type;
    params.iframe = iframe;
    return params;
};

const customIframeProps = customProps(true);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/iframe/:match/:year?/:target?',
            name: 'IframeView',
            component: IframeView,
            props: customIframeProps('uitslagen')
        },
        {
            path: '/iframe/:match/:year/loting/:field',
            name: 'IframeCrewDrawView',
            component: IframeCrewDrawView,
            props: customIframeProps('loting')
        },
        {
            path: '/iframe/:match/:year/uitslagen/:field',
            name: 'IframeCrewResultsView',
            component: IframeCrewResultsView,
            props: customIframeProps('uitslagen')
        },
        {
            path: '/iframe/:match/:year/search/:field',
            name: 'IframeCrewSearchView',
            component: IframeCrewSearchView,
            props: customIframeProps('search')
        },
        {
            path: '/iframe/:match/:year/club/:field',
            name: 'IframeCrewClubView',
            component: IframeCrewSearchView,
            props: customIframeProps('club')
        }
    ]
});
