<template>
    <div id="app">
        <navbar/>
        <template>
            <div class="home">
                <section class="section">
                    <div class="container">
                        <router-view/>
                    </div>
                </section>
            </div>
        </template>
    </div>
</template>

<style lang="scss">
    /*! bulmaswatch v0.8.1 | MIT License */
    @import "styles/variables";

    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";

    @import "styles/overrides";

</style>

<script>
    import navbar from '@/components/Navbar.vue'

    export default {
        name: 'app',
        components: {
            navbar,
        }
    }
</script>