<template>
    <b-card no-body header-class="p-0">
        <BreakingNews></BreakingNews>
        <ViewNavigationBar>
            <EventsOverview slot="fields" :events="events"></EventsOverview>
            <block-overview slot="blocks" :blocks="blocks"></block-overview>
            <clubs-overview slot="clubs" :clubs="clubs"></clubs-overview>
        </ViewNavigationBar>
    </b-card>
</template>

<script>
import ClubsOverview from '@/components/Clubs/ClubsOverview';
import BlockOverview from '@/components/Blocks/BlockOverview';
import EventsOverview from '../Events/EventsOverview';
import { findTabIndex, getActiveTab } from '../Navigation/activeTab';
import {openRegatta} from "../../Helpers/Routing";
import ViewNavigationBar from '../Navigation/ViewNavigationBar';
import BreakingNews from "./BreakingNews";

export default {
    name: 'RegattaOverview',
    components: {
        BreakingNews,
        EventsOverview,
        BlockOverview,
        ClubsOverview,
        ViewNavigationBar
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
        },
        navMatch(hash) {
            openRegatta(
                this.$router,
                this.$router.currentRoute.params,
                this.type,
                hash
            );
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
