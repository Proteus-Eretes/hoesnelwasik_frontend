<template>
    <div class="clubs" v-if="clubs">
        <b-table hover :items="prepareItems(clubs)" :fields="fields">
            <template slot="oarImage" slot-scope="item">
                <div class="oar">
                    <b-img :src="item.item.blad" fluid alt="verenigings blad" />
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'ClubsOverview',
    props: {
        clubs: Array
    },
    data() {
        return {
            fields: {
                blad: {
                    key: 'oarImage',
                    label: 'Blad',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                clubshort: {
                    label: 'Code',
                    thClass: 'font-italic',
                    class: 'text-center'
                },
                clubname: {
                    label: 'Vereniging',
                    thClass: 'font-italic',
                    class: 'text-center'
                }
            }
        };
    },
    methods: {
        prepareItems(clubs) {
            let res = clubs;

            res.forEach(function(club) {
                club.blad =
                    'https://images.poweredbyiris.nl/0/30/cluboars/' +
                    club.clubshort.toLowerCase() +
                    '.png';
            });

            return res;
        }
    }
};
</script>

<style scoped></style>
