<template>
    <b-tabs card class="full-width">
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Veld"
            v-on:click="navMatch('#velden')"
            :active=getActive(0)
        >
        </b-tab>
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Blok"
            v-on:click="navMatch('#blocks')"
            :active=getActive(1)
        >
        </b-tab>
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Vereniging"
            v-on:click="navMatch('#clubs')"
            :active=getActive(2)
        >
        </b-tab>
    </b-tabs>
</template>

<script>
import {getActiveTab} from "./activeTab";

export default {
    name: 'ViewNavigationBar',
    props: {
        type: String
    },
    methods: {
        navMatch(hash) {
            this.$router.push({
                path: `/iframe/${this.$router.currentRoute.params.match}/${
                    this.$router.currentRoute.params.year
                }/${this.type}${hash}`
            });
        },
        getActive(index) {
            if (this.$router.currentRoute.fullPath.includes('club')) {
                return getActiveTab(2, index);
            }
            return getActiveTab(1, index);
        }
    }
};
</script>
