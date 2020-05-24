<template>
    <b-navbar type="is-dark">
        <template slot="brand">
            <b-navbar-item tag="router-link" to="/">
                <b class="title is-5 has-text-white">Adam's Special School</b>
            </b-navbar-item>
        </template>
        <template slot="start">

            <b-navbar-item tag="router-link" to="/">
                Assignments
            </b-navbar-item>

            <b-navbar-item tag="router-link" to="/about">
                About
            </b-navbar-item>

            <b-navbar-item tag="router-link" to="/contact">
                Contact
            </b-navbar-item>
        </template>

    </b-navbar>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>