<template>
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
                        <h1 class="d-xl-none row text-white text-uppercase">
                            HSWI
                        </h1>
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
                                <a v-on:click="switchType('loting')" href="#" class="nav-link text-white"
                                    >Loting</a
                                >
                            </li>
                            <li class="nav-item">
                                <a v-on:click="switchType('uitslagen')" href="#" class="nav-link text-white"
                                    >Uitslagen</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white"
                                    >Live</a
                                >
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
</template>

<script>
import SearchBar from "./SearchBar";
export default {
    name: 'NavBar',
    components: {
        SearchBar
    },
    props: {
        regattas: Array,
        regatta: Object
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
        }
    },
    methods: {
        openMatch(next) {
            const match = this.$router.currentRoute.params.match;
            if (next) {
                const years = this.regattas
                    .filter(regatta => regatta.jaar > this.regatta.jaar)
                    .map(regatta => +regatta.jaar)
                    .sort();
                this.$router.push({
                    path: '/iframe/' + match + `/${years[0]}`
                });
            } else {
                const years = this.regattas
                    .filter(regatta => regatta.jaar < this.regatta.jaar)
                    .map(regatta => +regatta.jaar)
                    .sort();
                this.$router.push({
                    path: '/iframe/' + match + `/${years[years.length - 1]}`
                });
            }
        },
        switchType(type) {
            const par = this.$router.currentRoute.params;
            const match = par.match;
            const year = par.year;
            const field = par.field;
            if (field !== undefined) {
                this.$router.push(`/iframe/${match}/${year}/${type}/${field}`);
            } else {
                this.$router.push(`/iframe/${match}/${year}/${type}`);
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
