<template>
    <b-card no-body header-class="p-0">
        <b-tabs card v-model="tabIndex" class="full-width">
            <b-tab no-body title-link-class="link-unstyled" title-item-class="text-uppercase" title="Veld"
                   href="#velden"></b-tab>
            <b-tab no-body title-link-class="link-unstyled" title-item-class="text-uppercase" title="Blok"
                   href="#blocks">
                <block-overview :blocks="blocks"></block-overview>
            </b-tab>
            <b-tab no-body title-link-class="link-unstyled" title-item-class="text-uppercase" title="Vereniging" href="#clubs">
                <clubs-overview :clubs="clubs"></clubs-overview>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import ClubsOverview from '@/components/Clubs/ClubsOverview';
import BlockOverview from "@/components/Blocks/BlockOverview";

export default {
    name: 'RegattaOverview',
    components: {
        BlockOverview,
        ClubsOverview
    },
    props: {
        clubs: Array,
        blocks: Array
    },
    data() {
        return {
            tabIndex: 0,
            tabs: ['#velden', '#blocks', '#clubs']
        };
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
.full-width .card-header-tabs {
    margin-right: -21px;
    margin-left: -21px;
}

.full-width .nav-tabs .nav-item {
    margin-bottom: -1px;
    flex-grow: 1;
    text-align: center;
}
</style>
