<template>
    <b-tabs card class="full-width">
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Veld"
            @click="navMatch('velden')"
            :active="getActive(0)"
        >
            <slot name="fields"></slot>
        </b-tab>
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Blok"
            @click="navMatch('blocks')"
            :active="getActive(1)"
        >
            <slot name="blocks"></slot>
        </b-tab>
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Vereniging"
            @click="navMatch('clubs')"
            :active="getActive(2)"
        >
            <slot name="clubs"></slot>
        </b-tab>
    </b-tabs>
</template>

<script>
import {findTabIndex, getActiveTab} from './activeTab';
import { openRegatta } from '../../Helpers/Routing';

export default {
    name: 'ViewNavigationBar',
    props: {
        type: String
    },
    data() {
        return {
            tabIndex: findTabIndex(this.$route.hash, this.$router.currentRoute.path)
        };
    },
    methods: {
        navMatch(hash) {
            openRegatta(
                this.$router,
                this.$router.currentRoute.params,
                this.type,
                hash
            );
        },
        getActive(index) {
            return getActiveTab(this.tabIndex, index);
        }
    }
};
</script>
