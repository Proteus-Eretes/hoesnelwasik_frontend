<template>
    <div>
        <NavBar
                :regatta="regattasList[0]"
                :editions="regattasList"
                :regattas="regattasList"
        ></NavBar>
        <div class="container">
            <b-card-group deck class="venueDeck justify-content-center">
                <b-card
                        v-for="regatta in regattasList"
                        :key="regatta.shortname"
                        bg-variant="secondary"
                        text-variant="white"
                        class="text-center"
                        v-on:click="openEdition(regatta)"
                >
                    <b-card-text>{{ regatta.regattaname }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>

    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import {Service} from "../Services/Service";
import {sendPageView} from "./analytics";
import uniqBy from "../Helpers/uniqBy";
import {openRegatta} from "../Helpers/Routing";


export default {
    name: "VenuesOverview",
    data() {
        return {
            regattas: [],
        };
    },
    components: {NavBar},
    mounted() {
        this.service = new Service(
            this.$router.options.api,
        );
        this.init();
    },
    methods: {
        init: function () {
            this.service.getRegattas().then(regattas => {
                this.regattas = regattas;
            });
            sendPageView();
        },
        openEdition(regatta) {
            openRegatta(this.$router, {
                ...this.$router.currentRoute.params,
                match: regatta.shortname,
                year: 0
            });
        }
    },
    computed: {
        regattasList() {
            return uniqBy(this.regattas, 'regattaname').sort(
                (regattaA, regattaB) => regattaA.regattaname .localeCompare(regattaB.regattaname)
            );
        }
    }
};
</script>

<style type="scss" scoped>
    .venueDeck {
        flex-wrap: wrap !important;
        flex-grow: 1 !important;
    }

    .venueDeck * {
        flex-basis: 18% !important;
        margin: 15px 0 15px;
    }

    @media (max-width: 1000px) {
        .venueDeck * {
            flex-basis: 40% !important;
        }
    }
</style>