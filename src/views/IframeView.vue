<template>
    <div>
        <NavBar></NavBar>
        <RegattaOverview :match="match" :year="year"></RegattaOverview>
    </div>
</template>

<script>
import NavBar from '@/components/Navigation/NavBar';
import RegattaOverview from '@/components/Regatta/RegattaOverview';

export default {
    name: 'iframe-view',
    components: {
        RegattaOverview,
        NavBar
    },
    props: {
        match: String,
        year: String
    }
};
</script>
