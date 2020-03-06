<template>
    <b-table
        class="clickable"
        hover
        :items="sortedEvents"
        :fields="fields"
        head-variant="dark"
        @row-clicked="rowClicked"
    >
        <template v-slot:cell(fieldnameshort)="data">
            {{ data.item.fieldnameshort }}
            <small style="float: right" v-if="meerkamp">{{ data.item.name }}</small>
            <small>| Blok {{ data.item.blocknumber }}</small>
        </template>
    </b-table>
</template>

<script>

import eventsOrder from './eventsOrder';
import uniqBy from "../../Helpers/uniqBy";
import {rowClicked} from "../Navigation/navigation";

export default {
    name: 'EventsTable',
    props: {
        events: Array,
        title: String
    },
    data() {
        return {
            fields: [

                {
                    key: 'fieldnameshort',
                    label: this.title,
                },
            ],
        };
    },
    computed: {
        sortedEvents() {
            return [...this.events].sort(
                (eA, eB) =>
                    eventsOrder.indexOf(eA.category) -
                    eventsOrder.indexOf(eB.category)
            );
        },
        meerkamp() {
            return uniqBy(this.events, 'name').length > 1;
        }
    },
    methods: {
        rowClicked
    }
};
</script>
