<template>
    <div class="align-items-center justify-content-center input-group">
        <input
            class="form-control border-0 bg-dark text-white"
            type="search"
            placeholder="Zoek op naam, ploeg of vereniging"
            spellcheck="false"
            ref="searchBar"
            v-model="searchString"
            v-on:keyup.enter="search()"
        />
        <span class="input-group-append">
            <button
                class="btn btn-outline-secondary bg-dark text-white"
                type="button"
                v-on:click="search()"
            >
                <i class="fa fa-search"></i>
            </button>
        </span>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            searchString: '',
        }
    },
    methods: {
        search() {
            this.$router.push({
                path: `/iframe/${this.$router.currentRoute.params.match}/${this.$router.currentRoute.params.year}/search/${this.searchString}`
            });
        }
    }
};
</script>

<style scoped></style>
