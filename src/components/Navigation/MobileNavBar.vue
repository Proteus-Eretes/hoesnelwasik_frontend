<template>
    <div class="d-block d-sm-none">
        <Slide>
            <ul class="pt-3 navbar list-unstyled">
                <li class="nav-item text-white">
                    <h3>
                        <switch-regatta
                            :regattas="regattas"
                            :regatta="regatta"
                        ></switch-regatta>
                    </h3>
                </li>
                <li class="nav-item text-white w-100">
                    <switch-edition
                        :regatta="regatta"
                        :editions="editions"
                    ></switch-edition>
                </li>
                <li class="nav-item text-white">
                    <h3>Bekijk</h3>
                    <ul class="list-unstyled">
                        <li class="nav-item">
                            <h3>
                                <SwitchElement
                                    linkClass="nav-link text-white"
                                    target="uitslagen"
                                ></SwitchElement>
                            </h3>
                        </li>
                        <li class="nav-item">
                            <h3>
                                <SwitchElement
                                    linkClass="nav-link text-white"
                                    target="loting"
                                ></SwitchElement>
                            </h3>
                        </li>
                    </ul>
                </li>
            </ul>
        </Slide>
        <nav class="navbar navbar-dark" style="background-color: black">
            <h3 class="pl-5 navbar-nav text-white">
                {{ regatta.regattaname }} {{ regatta.jaar }}
            </h3>
            <SearchBar></SearchBar>
        </nav>
    </div>
</template>

<script>
import SearchBar from './SearchBar';
import { Slide } from 'vue-burger-menu';
import SwitchElement from './SwitchElement';
import { openRegatta } from '../../Helpers/Routing';
import SwitchRegatta from './SwitchRegatta';
import SwitchEdition from './SwitchEdition';
export default {
    name: 'MobileNavBar',
    components: {
        SwitchEdition,
        SwitchRegatta,
        SwitchElement,
        SearchBar,
        Slide
    },
    props: {
        editions: Array,
        regattas: Array,
        regatta: Object
    },
    data() {
        return {
            menu: [
                {
                    href: '/',
                    title: 'Dashboard',
                    icon: 'fa fa-user'
                }
            ]
        };
    },
    methods: {
        homeUrl(type) {
            openRegatta(
                this.$router,
                {
                    ...this.$router.currentRoute.params,
                    year: this.regatta.jaar
                },
                type
            );
        }
    }
};
</script>

<style lang="scss">
.bm-burger-bars {
    background-color: white !important;
}
.bm-burger-button {
    z-index: 5 !important;
    top: 8px !important;
    left: 18px !important;
}
.bm-menu {
    background-color: black !important;
}
.black button {
    background-color: black !important;
}
</style>
