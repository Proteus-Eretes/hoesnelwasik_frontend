<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
.ploeg {
    max-width: 150px;
}
@media (max-width: 350px) {
    .ploeg {
        max-width: 100px;
        overflow-x: hidden;
    }
}
.clickable {
    cursor: pointer;
}
</style>
