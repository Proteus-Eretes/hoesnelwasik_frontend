<template>
    <b-card no-body header-class="p-0">
        <b-tabs card v-model="tabIndex" class="full-width">
            <b-tab no-body title-link-class="link-unstyled" title-item-class="text-uppercase" title="Veld"
                   href="#velden"></b-tab>
            <b-tab no-body title-link-class="link-unstyled" title-item-class="text-uppercase" title="Blok"
                   href="#blocks"></b-tab>
            <b-tab no-body title-link-class="link-unstyled" title-item-class="text-uppercase" title="Vereniging" href="#clubs">
                <clubs-overview :clubs="clubs"></clubs-overview>
            </b-tab>
        </b-tabs>
    </b-card>
</template>

<script>
import {Regatta} from '@/services/Regatta';
import ClubsOverview from '@/components/Clubs/ClubsOverview';

export default {
    name: 'RegattaOverview',
    components: {
        ClubsOverview
    },
    props: {
        match: String,
        year: String
    },
    data() {
        return {
            clubs: [],
            tabIndex: 0,
            tabs: ['#velden', '#blocks', '#clubs']
        };
    },
    async mounted() {
        const regatta = new Regatta(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year
        );
        this.clubs = await regatta.getClubs();
        this.tabIndex = this.tabs.findIndex(tab => tab === this.$route.hash);
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
