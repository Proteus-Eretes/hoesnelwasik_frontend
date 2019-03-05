<template>
    <div>
        {{ n }}x
        <b-img class="card-img-header" src="https://images.poweredbyiris.nl/boats/rower.png"></b-img>
    </div>
</template>

<script>
export default {
    name: "RowerImage",
    props: {
        n: Number
    }
};
</script>

<style scoped lang="scss">
.card-img-header {
    width: auto;
    max-width: 100%;
    max-height: 18px;
    margin-left: 5px;
}
</style>