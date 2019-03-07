<template>
    <b-card
        v-if="events.length"
        header-tag="header"
        header-bg-variant="dark"
        header-text-variant="white"
        no-body
    >
        <EventsTable :events="events" :title="title"></EventsTable>
    </b-card>
</template>

<script>
import EventsTable from './EventsTable';
export default {
    name: 'EventCard',
    components: { EventsTable },
    props: {
        events: Array,
        title: String
    }
};
</script>
