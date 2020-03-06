<template>
    <div>
        <MobileNavBar
            :regatta="regatta"
            :regattas="regattas"
            :editions="editions"
        ></MobileNavBar>
        <nav
            class="navbar navbar-dark navbar-expand-sm d-none d-sm-block"
            style="background-color: black"
        >
            <div class="collapse navbar-collapse w-100" id="navbar">
                <b-container fluid>
                    <b-row style="width: 100%">
                        <b-col class="col-4">
                            <b-link :href="openHome($router.currentRoute.params)">
                                <h1
                                    class="d-none d-xl-flex row text-white text-uppercase"
                                >
                                    Hoe snel was ik?
                                </h1>
                            </b-link>
                            <b-link :href="openHome($router.currentRoute.params)">
                                <h6
                                    class="h-50 align-items-center d-xl-none row text-white text-uppercase"
                                >
                                    Hoe snel was ik?
                                </h6>
                            </b-link>
                            <b-row>
                                <div
                                    class="navbar-nav nav-item nav-link text-white"
                                >
                                    <switch-regatta
                                        :regattas="regattas"
                                        :regatta="regatta"
                                    ></switch-regatta>
                                    <switch-edition
                                        :regatta="regatta"
                                        :editions="editions"
                                    ></switch-edition>
                                </div>
                            </b-row>
                        </b-col>
                        <b-col cols="4">
                            <h1
                                class="row nav-item text-white align-items-center justify-content-center text-uppercase"
                            >
                                Roeiuitslagen
                            </h1>
                            <b-row>
                                <SearchBar></SearchBar>
                            </b-row>
                        </b-col>
                        <b-col cols="3" class="d-flex flex-row">
                            <ul
                                class="navbar-nav align-self-end w-100 flex-row font-weight-bold"
                            >
                                <li class="ml-auto nav-item">
                                    <SwitchElement
                                        linkClass="nav-link text-white"
                                        target="uitslagen"
                                    >
                                    </SwitchElement>
                                </li>
                                <li class="nav-item">
                                    <SwitchElement
                                        linkClass="nav-link text-white"
                                        target="loting"
                                    >
                                    </SwitchElement>
                                </li>
                            </ul>
                        </b-col>
                        <b-col cols="1" class="flex-row">
                            <b-link :href="openHome($router.currentRoute.params)">
                                <img
                                    alt="logo"
                                    class="mx-auto header-img"
                                    src="https://images.poweredbyiris.nl/100/logo.png"
                                />
                            </b-link>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </nav>
        <BreakingNews v-if="regatta.hasMessage" :message="regatta.message"></BreakingNews>
    </div>
</template>

<script>
import SearchBar from './SearchBar';
import MobileNavBar from './MobileNavBar';
import SwitchElement from './SwitchElement';
import SwitchRegatta from './SwitchRegatta';
import SwitchEdition from './SwitchEdition';
import BreakingNews from '../Regatta/BreakingNews';
import { openHome } from '../../Helpers/Routing';

export default {
    name: 'NavBar',
    components: {
        BreakingNews,
        SwitchEdition,
        SwitchRegatta,
        SwitchElement,
        MobileNavBar,
        SearchBar
    },
    props: {
        editions: Array,
        regattas: Array,
        regatta: Object
    },
    methods: {
        openHome
    }
};
</script>

<style scoped type="scss">
.header-img {
    height: auto;
    width: 100%;
    max-height: 100px;
    max-width: 100px;
    float: right;
}
</style>
