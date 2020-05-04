<template>
    <section class="wrapper hero is-black is-fullheight">
        <h1 class="title is-3">Don’t rely exclusively on technology</h1>
        <h1 class="title is-1">Technology can</h1>
        <h1 class="glitch">Fail</h1>

    </section>

</template>

<script>
    export default {
        name: "Point2"
    }
</script>

<style scoped lang="sass">
    *
        margin: 0
        padding: 0

    body, html
        width: 100%
        height: 100%
        background-color: #0a0a0a

    .wrapper
        width: 100%
        height: 100%
        display: flex
        justify-content: center
        align-items: center

        h1.glitch
            color: white
            font-family: sans-serif
            font-weight: 800
            position: relative
            font-size: 100px
            padding: 30px

        h1.glitch::before, h1.glitch::after
            padding: 30px
            color: white
            content: "Fail"
            position: absolute
            width: 100%
            height: 100%
            background: #0a0a0a
            overflow: hidden
            top: 0

        h1.glitch::before
            left: 3px
            text-shadow: -2px 0 red
            animation-name: glitch-animation-1
            animation-duration: 2s
            animation-timing-function: linear
            animation-delay: 0s
            animation-iteration-count: infinite
            animation-direction: alternate-reverse

        h1.glitch::after
            left: -3px
            text-shadow: -2px 0 blue
            animation-name: glitch-animation-2
            animation-duration: 2s
            animation-timing-function: linear
            animation-delay: 0s
            animation-iteration-count: infinite
            animation-direction: alternate-reverse

    @keyframes glitch-animation-1
        $steps: 20
        @for $i from 0 through $steps
            #{percentage($i*(1/$steps))}
                clip: rect(random(150)+px, 350px, random(150)+px, 30px)

    @keyframes glitch-animation-2
        $steps: 20
        @for $i from 0 through $steps
            #{percentage($i*(1/$steps))}
                clip: rect(random(150)+px, 350px, random(150)+px, 30px)
</style>