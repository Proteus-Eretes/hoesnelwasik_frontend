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
                    <b-card-group columns style="column-count: 2">
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
                    </b-card-group>
                </b-container>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import RowerImage from '../rower/RowerImage';
import EventCard from './EventCard';
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
        getFilteredEvents(n, isMan, isLight) {
            // noinspection EqualityComparisonWithCoercionJS
            return this.events[n].filter(
                event => event.isman == isMan && event.islight == isLight
            );
        }
    }
};
</script>

<style scoped></style>
