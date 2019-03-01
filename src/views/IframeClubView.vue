<template>
    <div>
        <NavBar></NavBar>
        <clubs-overview :clubs="clubs"> </clubs-overview>
    </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/Navigation/NavBar';
import {Regatta} from "../services/Regatta";
import ClubsOverview from "../components/Clubs/ClubsOverview";

export default {
    name: 'iframe-club-view',
    components: {
        ClubsOverview,
        NavBar
    },
    props: {
        match: String,
        year: String
    },
    data() {
        return {
            clubs: []
        };
    },
    async mounted() {
        const regatta = new Regatta(
            'https://beta.hoesnelwasik.nl/api',
            this.match,
            this.year
        );
        this.clubs = await regatta.getClubs();
    }
};
</script>
