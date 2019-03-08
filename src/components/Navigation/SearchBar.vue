<template>
    <div class="align-items-center justify-content-center input-group">
        <input
            class="form-control border-0 bg-dark text-white"
            type="search"
            placeholder="Zoek op naam, ploeg of vereniging"
            spellcheck="false"
            id="search-bar"
        />
        <span class="input-group-append">
            <button
                class="btn btn-outline-secondary bg-dark text-white"
                type="button"
            >
                <i class="fa fa-search"></i>
            </button>
        </span>
    </div>
</template>

<script>
export default {
    name: 'SearchBar'
};
</script>

<style scoped></style>
