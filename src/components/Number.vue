<template>
    <h1 class="has-text-danger title is-1 number-marker">{{ number }}</h1>
</template>

<script>

    export default {
        name: "Number",
        props: {
            number: String
        }
    }
</script>

<style scoped>
.number-marker{
    font-size: 6rem;
}
</style>