<template>
    <div>
        <nav
                class="fixed-top navbar navbar-dark navbar-expand-md"
                style="background-color: black"
        >
            <div class="collapse navbar-collapse d-flex flex-column" id="navbar">
                <div class="p-2 w-100">
                    <div class="d-flex flex-row">
                        <h1 class="nav-item text-white">
                            HOE SNEL WAS IK?
                        </h1>
                        <h1 class="nav-item mx-auto text-white">
                            ROEIUITSLAGEN
                        </h1>

                    </div>
                </div>
                <div class="p-2 w-100">
                    <ul class="d-flex flex-row">
                        <li class="nav-item">
                            <a href="#" class="nav-link active"
                            >Head of the river <2017></a
                            >
                        </li>
                        <form class="form-inline mx-auto">
                            <input
                                    autocomplete="off"
                                    class="form-control search"
                                    id="search-bar"
                                    placeholder="Zoek op naam, ploeg of vereniging"
                                    spellcheck="false"
                                    type="text"
                            />
                        </form>
                        <li class="nav-item ml-auto">
                            <a href="#" class="nav-link">Uitslagen</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Loting</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Live</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img alt="logo" class="ml-auto p-2 align-self-stretch"
                 src="https://images.poweredbyiris.nl/125/logo.png"/>
        </nav>
        <FinishTime time="800.15" bonusSeconds="1"></FinishTime>
    </div>
</template>

<script>
// @ is an alias to /src
import FinishTime from '@/components/Time/FinishTime.vue';
import {Regatta} from '@/sercives/Regatta';

export default {
    name: 'iframe-view',
    components: {
        FinishTime
    },
    async mounted() {
        const regatta = new Regatta(
            'https://beta.hoesnelwasik.nl/api',
            'ww',
            0
        );
        console.log(await regatta.getClubs());
        console.log(await regatta.getBlocks());
        console.log(await regatta.getFields());
    }
};
</script>
