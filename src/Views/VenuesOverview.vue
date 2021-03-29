<template>
    <div>
        <FrontpageNavBar> </FrontpageNavBar>
        <div class="container mt-5">
            <h2>Recente Wedstrijden</h2>
            <b-card-group deck class="venueDeck">
                <b-card
                    v-for="regatta in recentRegattas"
                    :key="regatta.shortname"
                    bg-variant="black"
                    text-variant="white"
                    class="text-center clickable ml-1"
                    v-on:click="openEdition(regatta)"
                >
                    <b-card-text>{{ regatta.regattaname }}</b-card-text>
                </b-card>
            </b-card-group>
            <br />
            <h2>Archief</h2>
            <b-card-group deck class="venueDeck">
                <b-card
                    v-for="regatta in regattasList"
                    :key="regatta.shortname"
                    bg-variant="black"
                    text-variant="white"
                    class="text-center clickable ml-1"
                    v-on:click="openEdition(regatta)"
                >
                    <b-card-text>{{ regatta.regattaname }}</b-card-text>
                </b-card>
            </b-card-group>
        </div>
    </div>
</template>

<script>
import FrontpageNavBar from '@/components/Navigation/FrontpageNavBar';
import { Service } from '@/Services/Service';
import { sendPageView } from './analytics';
import uniqBy from '../Helpers/uniqBy';
import { openRegatta } from '@/Helpers/Routing';

export default {
    name: 'VenuesOverview',
    data() {
        return {
            regattas: []
        };
    },
    components: { FrontpageNavBar },
    mounted() {
        this.service = new Service(this.$router.options.api);
        this.init();
    },
    methods: {
        init: function() {
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
                (regattaA, regattaB) =>
                    regattaA.regattaname.localeCompare(regattaB.regattaname)
            );
        },
        recentRegattas() {
            return uniqBy(
                this.regattas
                    .filter(
                        regatta => regatta.jaar >= new Date().getFullYear() - 1
                    )
                    .sort((regattaA, regattaB) =>
                        regattaA.regattaname.localeCompare(regattaB.regattaname)
                    ),
                'regattaname'
            );
        }
    }
};
</script>

<style scoped>
.venueDeck {
    flex-wrap: wrap !important;
    flex-grow: 1 !important;
}

.venueDeck * {
    flex-basis: 30% !important;
    margin: 15px 0 15px;
}

@media (max-width: 1000px) {
    .venueDeck * {
        flex-basis: 40% !important;
    }
}
</style>
