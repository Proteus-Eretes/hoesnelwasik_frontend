<template>
    <nav
            class="navbar navbar-dark navbar-expand-md"
            style="background-color: black"
    >
        <div class="collapse navbar-collapse w-100" id="navbar">
            <div class="row container-fluid">
                <div class="col-4">
                    <h1 class="row text-white">
                        HOE SNEL WAS IK?
                    </h1>
                    <div class="row">
                        <div class="navbar-nav nav-item">
                            <a href="#" class="nav-link active">Head of the river <2017></a>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <h1 class="row nav-item text-white align-items-center justify-content-center">
                        ROEIUITSLAGEN
                    </h1>
                    <div class="row">
                        <div class="align-items-center justify-content-center input-group">
                            <input
                                    class="form-control border-0 bg-dark text-white"
                                    type="search"
                                    value="search"
                                    placeholder="Zoek op naam, ploeg of vereniging"
                                    spellcheck="false"
                                    id="search-bar"
                            >
                            <span class="input-group-append">
                                <button class="btn btn-outline-secondary bg-dark text-white" type="button">
                                    <i class="fa fa-search"></i>
                                </button>
                          </span>
                        </div>
                    </div>
                </div>
                <div class="col-3 d-flex flex-row">
                    <ul class="navbar-nav align-self-end w-100 flex-row">
                        <li class="ml-auto nav-item">
                            <a href="#" class="nav-link">Uitslagen</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Live</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Loting</a>
                        </li>
                    </ul>
                </div>
                <div class="col-1">
                    <img alt="logo" class="mx-auto" src="https://images.poweredbyiris.nl/100/logo.png"/>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>

</style>