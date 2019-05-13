<template>
    <div class="oar">
        <b-img :src="sourceUrl" fluid alt="verenigings blad" />
    </div>
</template>

<script>
export default {
    name: 'OarImage',
    props: {
        club: String
    },
    computed: {
        sourceUrl() {
            return (
                'https://images.poweredbyiris.nl/0/30/cluboars/' +
                this.club.toLowerCase() +
                '.png'
            );
        }
    }
};
</script>
