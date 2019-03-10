<template>
    <b-card no-body header-class="p-0">
        <b-tabs card class="full-width">
            <b-tab
                no-body
                title-link-class="link-unstyled"
                title-item-class="text-uppercase"
                title="Veld"
                href="#velden"
                :active=getActive(0)
            >
                <EventsOverview :events="events"></EventsOverview>
            </b-tab>
            <b-tab
                no-body
                title-link-class="link-unstyled"
                title-item-class="text-uppercase"
                title="Blok"
                :active=getActive(1)
                href="#blocks"
            >
                <block-overview :blocks="blocks"></block-overview>
            </b-tab>
            <b-tab
                no-body
                title-link-class="link-unstyled"
                title-item-class="text-uppercase"
                title="Vereniging"
                :active=getActive(2)
                href="#clubs"
            >
                <clubs-overview :clubs="clubs"></clubs-overview>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import ClubsOverview from '@/components/Clubs/ClubsOverview';
import BlockOverview from '@/components/Blocks/BlockOverview';
import EventsOverview from '../Events/EventsOverview';
import {findTabIndex, getActiveTab} from "../Navigation/activeTab";

export default {
    name: 'RegattaOverview',
    components: {
        EventsOverview,
        BlockOverview,
        ClubsOverview
    },
    props: {
        clubs: Array,
        blocks: Array,
        events: Array
    },
    data() {
        return {
            tabIndex: findTabIndex(this.$route.hash)
        };
    },
    methods: {
        getActive(index) {
            return getActiveTab(this.tabIndex, index);
        }
    }
};
</script>

<style lang="scss">
.link-unstyled {
    &,
    &:visited,
    &:hover,
    &:active,
    &:focus,
    &:active:hover {
        font-style: inherit;
        color: inherit;
        background-color: transparent;
        font-size: inherit;
    }
}
</style>
