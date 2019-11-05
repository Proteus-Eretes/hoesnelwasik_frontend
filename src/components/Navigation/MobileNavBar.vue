<template>
    <div class="d-block d-sm-none">
        <Slide>
            <ul class="pt-3 navbar list-unstyled">
                <li class="nav-item text-white">
                    <h3>
                        <a class="p-0 text-white" v-on:click="homeUrl()">
                            {{ regatta.regattaname }}
                        </a>
                    </h3>
                </li>
                <li class="nav-item text-white w-100">
                    <b-dropdown
                        :text="regatta.jaar"
                        style="background-color: black"
                        class="black"
                    >
                        <b-dropdown-item
                            v-for="edition in regattasOrder"
                            :key="edition"
                            v-on:click="openEdition(edition)"
                        >
                            {{ edition }}
                        </b-dropdown-item>
                    </b-dropdown>
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
import { openNextRegatta, openPrevRegatta } from './navigation';
import { openRegatta } from '../../Helpers/Routing';
export default {
    name: 'MobileNavBar',
    components: {
        SwitchElement,
        SearchBar,
        Slide
    },
    props: {
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
    computed: {
        hasNext() {
            return this.regattas.filter(
                regatta => regatta.jaar > this.regatta.jaar
            ).length;
        },
        hasPrev() {
            return this.regattas.filter(regatta => {
                return regatta.jaar < this.regatta.jaar;
            }).length;
        },
        regattasOrder() {
            return this.regattas
                .map(regatta => +regatta.jaar)
                .sort()
                .reverse();
        }
    },
    methods: {
        openMatch(next) {
            if (next) {
                openNextRegatta(this.$router, this.regattas, {
                    ...this.$router.currentRoute.params,
                    year: this.regatta.jaar
                });
            } else {
                openPrevRegatta(this.$router, this.regattas, {
                    ...this.$router.currentRoute.params,
                    year: this.regatta.jaar
                });
            }
        },
        openEdition(year) {
            openRegatta(this.$router, {
                ...this.$router.currentRoute.params,
                year
            });
        },
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
