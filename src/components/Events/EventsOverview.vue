<template>
    <b-card no-body header-class="p-0">
        <b-tabs card class="full-width">
            <b-tab v-for="n in rowers" :key=n
                   no-body title-link-class="link-unstyled"
            >
                <template slot="title">
                    <RowerImage :n="n"></RowerImage>
                </template>
                <EventsTable :events="events[n]" title="Aapjes"></EventsTable>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import RowerImage from "../rower/RowerImage";
import EventsTable from "./EventsTable";
export default {
    name: "EventsOverview",
    components: {EventsTable, RowerImage},
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
    }
};
</script>

<style scoped>

</style>