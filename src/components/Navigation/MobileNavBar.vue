<template>
    <div class="d-block d-sm-none">
        <Slide>
            <ul class="pt-3 navbar list-unstyled">
                <li class="nav-item text-white">
                    <h3>
                        <a class="p-0 text-white" :href="homeUrl">{{
                            regatta.regattaname
                        }}</a>
                    </h3>
                </li>
                <li class="nav-item text-white w-100">
                    <b-dropdown :text="regatta.jaar" style="background-color: black" class="black">
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
                                <a class="nav-link text-white" :href="homeUrl('uitslagen')"
                                    ><strong v-if="highlightLink('uitslagen')">
                                        Uitslagen</strong
                                    >
                                    <div v-else>Uitslagen</div></a
                                >
                            </h3>
                        </li>
                        <li class="nav-item">
                            <h3>
                                <a class="nav-link text-white" :href="homeUrl('loting')"
                                    ><strong v-if="highlightLink('loting')">
                                        Loting</strong
                                    >
                                    <div v-else>Loting</div></a
                                >
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
import {highlightLink} from "./navigation";
export default {
    name: 'MobileNavBar',
    components: {
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
        highlightLink: highlightLink(this.$router),
        openMatch(next) {
            if (next) {
                const years = this.regattas
                    .filter(regatta => regatta.jaar > this.regatta.jaar)
                    .map(regatta => +regatta.jaar)
                    .sort();
                this.$router.push({
                    path: `/iframe/${this.regatta.shortname}/${years[0]}`
                });
            } else {
                const years = this.regattas
                    .filter(regatta => regatta.jaar < this.regatta.jaar)
                    .map(regatta => +regatta.jaar)
                    .sort();
                this.$router.push({
                    path: `/iframe/${this.regatta.shortname}/${
                        years[years.length - 1]
                    }`
                });
            }
        },
        openEdition(year) {
            this.$router.push({
                path: `/iframe/${this.regatta.shortname}/${year}`
            });
        },
        homeUrl(type) {
            return `/iframe/${this.regatta.shortname}/${this.regatta.jaar}/${type}`;
        }
    }
};
</script>

<style type="scss">
.bm-burger-bars {
    background-color: white;
}
.bm-burger-button {
    z-index: 5;
    top: 8px;
    left: 18px;
}
.nav-link strong {
    text-decoration: underline;
}
.bm-menu {
    background-color: black;
}
.black button {
    background-color: black;
}
</style>
