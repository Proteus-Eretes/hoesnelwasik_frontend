<template>
    <div>
        <nav
            class="navbar navbar-dark navbar-expand-sm"
            style="background-color: black"
        >
            <div class="collapse navbar-collapse w-100" id="navbar">
                <b-container fluid>
                    <b-row style="width: 100%">
                        <b-col class="col-4">
                            <h1
                                class="d-none d-xl-flex row text-white text-uppercase"
                            >
                                Hoe snel was ik?
                            </h1>
                            <h6
                                class="h-50 align-items-center d-none d-lg-flex d-xl-none row text-white text-uppercase"
                            >
                                Hoe snel was ik?
                            </h6>
                        </b-col>
                        <b-col cols="4">
                            <h1
                                class="row nav-item text-white align-items-center justify-content-center text-uppercase"
                            >
                                Roeiuitslagen
                            </h1>
                        </b-col>
                        <b-col cols="3" class="d-flex flex-row">
                            <ul
                                class="navbar-nav align-self-end w-100 flex-row font-weight-bold"
                            ></ul>
                        </b-col>
                        <b-col cols="1" class="flex-row">
                            <img
                                alt="logo"
                                class="mx-auto header-img"
                                src="https://images.poweredbyiris.nl/100/logo.png"
                            />
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    components: {},
    props: {}
};
</script>

<style scoped type="scss">
.header-img {
    height: auto;
    width: 56px;
    max-height: 100px;
    max-width: 100px;
    float: right;
}
</style>
