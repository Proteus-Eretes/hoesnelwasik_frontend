<template>
    <b-card
        border-variant="danger"
        header="Belangrijk"
        header-border-variant="danger"
        header-text-variant="danger"
        align="center"
    >
        <b-card-text> {{ text}}</b-card-text>
    </b-card>
</template>

<script>
export default {
    name: 'BreakingNews',
    props: {
        message: Text
    },
    data() {
        return {
            text: 'Dit is een bericht'
        };
    }
};
</script>

<style scoped></style>
