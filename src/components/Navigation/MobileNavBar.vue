<template>
    <div class="d-block d-sm-none">
        <Slide>
            <ul>
                <li>
                    <a id="home" :href=homeUrl>{{regatta.regattaname}}</a>
                </li>
                <ul class="navbar-nav align-self-end w-100 flex-row font-weight-bold">

                </ul>
            </ul>
        </Slide>
        <nav
            class="navbar navbar-dark"
            style="background-color: black"
        >
            <h1 class="text-white text-uppercase">IRIS - HSWI</h1>
            <div
                class="navbar-nav d-flex flex-row nav-item nav-link text-white"
            >
                {{ regatta.regattaname }}
                <span v-on:click="openMatch(false)" v-if="hasPrev" class="pl-2">
                    &lt;
                </span>
                {{ regatta.jaar }}
                <span v-on:click="openMatch(true)" v-if="hasNext" class="pr-2">
                    &gt;
                </span>
            </div>
            <SearchBar></SearchBar>
        </nav>
    </div>
</template>

<script>
import SearchBar from './SearchBar';
import { Slide } from 'vue-burger-menu';
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
            if (this.regatta.jaar === 0) {
                return false;
            }
            return this.regattas.filter(
                regatta => regatta.jaar > this.regatta.jaar
            ).length;
        },
        hasPrev() {
            if (this.regatta.jaar === 0 && this.regattas.length > 1) {
                return true;
            }
            return this.regattas.filter(regatta => {
                return regatta.jaar < this.regatta.jaar;
            }).length;
        },
        homeUrl() {
            return `/iframe/${this.regatta.shortname}/${this.regatta.jaar}`;
        }
    },
    methods: {
        openMatch(next) {
            if (next) {
                const years = this.regattas
                    .filter(regatta => regatta.jaar > this.regatta.jaar)
                    .map(regatta => +regatta.jaar)
                    .sort();
                this.$router.push({ path: `/iframe/ww/${years[0]}` });
            } else {
                const years = this.regattas
                    .filter(regatta => regatta.jaar < this.regatta.jaar)
                    .map(regatta => +regatta.jaar)
                    .sort();
                this.$router.push({
                    path: `/iframe/ww/${years[years.length - 1]}`
                });
            }
        }
    }
};
</script>

<style>
/*.vsm-collapsed {*/
    /*display: none;*/
/*}*/
</style>
