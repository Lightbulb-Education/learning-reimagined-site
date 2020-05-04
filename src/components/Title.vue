<template>
    <section class="hero is-link is-fullheight">
        <Particles />
        <div class="box panel columns is-desktop is-vcentered">
            <div class="">
                <h1 class="title has-text-dark is-size-3 is-size-1-desktop is-size-3-mobile">
                    Don't Use Technology in the Classroom
                </h1>
                <h2 class="subtitle has-text-dark is-size-5 is-size-3-desktop is-size-5-mobile">
                    Presented by Adam Nguyen and Jonathan Chacko
                </h2>

            </div>
        </div>
<!--        <div class="hero-body">-->
<!--            <div class="container">-->
<!--                <div class="box">-->
<!--                <h1 class="title">-->
<!--                    Fullheight title-->
<!--                </h1>-->
<!--                <h2 class="subtitle">-->
<!--                    Fullheight subtitle-->
<!--                </h2>-->
<!--                </div>-->

<!--            </div>-->

<!--        </div>-->
    </section>
</template>

<script>
    import Particles from '@/components/Particles.vue'

    export default {
        name: "Title",
        components: {
            Particles
        }
    }
</script>

<style scoped>
canvas{
    width: 100%;
    height: 100%;
}
.panel {
    position: absolute;
    max-width: 40rem;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    padding: 3rem;
    z-index: 100;
}
</style>