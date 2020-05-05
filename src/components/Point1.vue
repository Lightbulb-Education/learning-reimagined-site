<template>
    <div>
        <section class="wrapper section hero is-info is-fullheight">
            <div class="container is-fluid">
                <Number number="1"/>
                <h1 class="title is-1">Don't use technology for the sake of using technology.</h1>

            </div>

        </section>

    </div>

</template>

<script>
    import Number from '@/components/Number.vue'

    export default {
        name: "Point1",
        components: {
            Number,
        }
    }
</script>

<style scoped>

</style>