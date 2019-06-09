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
import {openSearch} from "../../Helpers/Routing";

export default {
    name: 'SearchBar',
    data() {
        return {
            searchString: ''
        };
    },
    methods: {
        search() {
            openSearch(this.$router, this.searchString);
        }
    }
};
</script>
