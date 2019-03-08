<template>
    <b-tabs card class="full-width">
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Veld"
            v-on:click="navMatch('#velden')"
        >
        </b-tab>
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Blok"
            v-on:click="navMatch('#blocks')"
        >
        </b-tab>
        <b-tab
            no-body
            title-link-class="link-unstyled"
            title-item-class="text-uppercase"
            title="Vereniging"
            v-on:click="navMatch('#clubs')"
        >
        </b-tab>
    </b-tabs>
</template>

<script>
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
        }
    }
};
</script>

<style scoped></style>
