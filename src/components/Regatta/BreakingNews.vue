<template>
    <b-card
        border-variant="danger"
        header="Belangrijk"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
    >
        <b-card-text> {{ message }}</b-card-text>
    </b-card>
</template>

<script>
export default {
    name: 'BreakingNews',
    props: {
        message: String
    },
};
</script>

<style scoped></style>
