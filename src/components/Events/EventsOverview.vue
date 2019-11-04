<template>
    <b-card no-body header-class="p-0">
        <b-tabs card class="full-width">
            <b-tab
                v-for="n in rowers"
                :key="n"
                no-body
                title-link-class="link-unstyled"
            >
                <template slot="title">
                    <RowerImage :n="n"></RowerImage>
                </template>
                <b-container class="mt-3">
                    <b-card-group columns class="columns">
                        <EventCard
                            :events="getFilteredEvents(n, true, false)"
                            title="Heren"
                        >
                        </EventCard>
                        <EventCard
                            :events="getFilteredEvents(n, true, true)"
                            title="Lichte Heren"
                        >
                        </EventCard>
                        <EventCard
                            :events="getFilteredEvents(n, false, false)"
                            title="Dames"
                        >
                        </EventCard>
                        <EventCard
                            :events="getFilteredEvents(n, false, true)"
                            title="Lichte Dames"
                        >
                        </EventCard>
                        <EventCard
                            :events="getFilteredEvents(n, false, false, true)"
                            title="Mix"
                        >
                        </EventCard>
                    </b-card-group>
                </b-container>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import RowerImage from '../Rower/RowerImage';
import EventCard from './EventCard';
import filterEvents from './filterEvents';
export default {
    name: 'EventsOverview',
    components: { EventCard, RowerImage },
    props: {
        events: Array
    },
    computed: {
        rowers() {
            return this.events.reduce((rowers, events, n) => {
                rowers.push(n);
                return rowers;
            }, []);
        }
    },
    methods: {
        getFilteredEvents(n, isMan, isLight, isMix = false) {
            return filterEvents(this.events[n], isMan, isLight, isMix);
        }
    }
};
</script>

<style type="text/scss">
.columns {
    column-count: 2 !important;
}
@media (max-width: 419.98px) {
    .columns {
        column-count: 1 !important;
    }
}
</style>
