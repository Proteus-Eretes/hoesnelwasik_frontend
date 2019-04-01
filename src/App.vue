<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
.ploeg {
    max-width: 150px;
}
@media (max-width: 400px) {
    .table-responsive {
        font-size: 10px !important;
    }
}
@media (max-width: 350px) {
    .ploeg {
        max-width: 80px;
        overflow-x: hidden;
    }
}
.clickable {
    cursor: pointer;
}
.nav-link strong {
    text-decoration: underline;
}
</style>
