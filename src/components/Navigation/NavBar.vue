<template>
    <nav
        class="navbar navbar-dark navbar-expand-md"
        style="background-color: black"
    >
        <div class="collapse navbar-collapse w-100" id="navbar">
            <b-container fluid>
                <b-row>
                    <div class="col-4">
                        <h1 class="row text-white text-capitalize">
                            Hoe snel was ik?
                        </h1>
                        <div class="row">
                            <div class="navbar-nav nav-item">
                                <a href="#" class="nav-link text-white">
                                    {{ regatta.regattaname }} &lt;
                                    {{ regatta.jaar }} &gt;
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <h1
                            class="row nav-item text-white align-items-center justify-content-center text-capitalize"
                        >
                            Roeiuitslagen
                        </h1>
                        <b-row>
                            <div
                                class="align-items-center justify-content-center input-group"
                            >
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
                        </b-row>
                    </div>
                    <div class="col-3 d-flex flex-row">
                        <ul
                            class="navbar-nav align-self-end w-100 flex-row font-weight-bold"
                        >
                            <li class="ml-auto nav-item">
                                <a href="#" class="nav-link text-white"
                                    >Uitslagen</a
                                >
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white">Live</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white"
                                    >Loting</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="col-1">
                        <img
                            alt="logo"
                            class="mx-auto"
                            src="https://images.poweredbyiris.nl/100/logo.png"
                        />
                    </div>
                </b-row>
            </b-container>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        regattas: Array,
        regatta: Object
    },
    computed: {
        hasNext() {
            if (this.regatta.jaar === 0) {
                return false;
            }
            return this.regattas.filter(regatta => {
                return regatta.jaar > this.regatta.jaar;
            }).length;
        },
        hasPrev() {
            if (this.regatta.jaar === 0 && this.regattas.length > 1) {
                return true;
            }
            return this.regattas.filter(regatta => {
                return regatta.jaar < this.regatta.jaar;
            }).length;
        }
    }
};
</script>

<style scoped></style>
