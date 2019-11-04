<template>
    <div>
        <MobileNavBar :regatta="regatta" :regattas="regattas"></MobileNavBar>
        <nav
            class="navbar navbar-dark navbar-expand-sm d-none d-sm-block"
            style="background-color: black"
        >
            <div class="collapse navbar-collapse w-100" id="navbar">
                <b-container fluid>
                    <b-row>
                        <div class="col-4">
                            <h1
                                class="d-none d-xl-flex row text-white text-uppercase"
                            >
                                Hoe snel was ik?
                            </h1>
                            <h6
                                class="h-50 align-items-center d-xl-none row text-white text-uppercase"
                            >
                                Hoe snel was ik?
                            </h6>
                            <b-row>
                                <div
                                    class="navbar-nav nav-item nav-link text-white"
                                >
                                    {{ regatta.regattaname }}
                                    <span
                                        v-on:click="openMatch(false)"
                                        v-if="hasPrev"
                                        class="pl-2 clickable"
                                    >
                                        &lt;
                                    </span>
                                    {{ regatta.jaar }}
                                    <span
                                        v-on:click="openMatch(true)"
                                        v-if="hasNext"
                                        class="pr-2 clickable"
                                    >
                                        &gt;
                                    </span>
                                </div>
                            </b-row>
                        </div>
                        <div class="col-4">
                            <h1
                                class="row nav-item text-white align-items-center justify-content-center text-uppercase"
                            >
                                Roeiuitslagen
                            </h1>
                            <b-row>
                                <SearchBar></SearchBar>
                            </b-row>
                        </div>
                        <div class="col-3 d-flex flex-row">
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
                        </div>
                        <div class="col-1 flex-row">
                            <img
                                alt="logo"
                                class="mx-auto header-img"
                                src="https://images.poweredbyiris.nl/100/logo.png"
                            />
                        </div>
                    </b-row>
                </b-container>
            </div>
        </nav>
    </div>
</template>

<script>
import SearchBar from './SearchBar';
import MobileNavBar from './MobileNavBar';
import SwitchElement from './SwitchElement';
import {openNextRegatta, openPrevRegatta} from "./navigation";

export default {
    name: 'NavBar',
    components: {
        SwitchElement,
        MobileNavBar,
        SearchBar
    },
    props: {
        regattas: Array,
        regatta: Object
    },
    computed: {
        hasNext() {
            return this.regattas.filter(
                regatta => regatta.jaar > this.regatta.jaar
            ).length;
        },
        hasPrev() {
            return this.regattas.filter(
                regatta => regatta.jaar < this.regatta.jaar
            ).length;
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
        }
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
