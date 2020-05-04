<template>
    <b-navbar type="is-dark" class="navbar-h">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                        src=""
                        alt=""
                >
            </b-navbar-item>
        </template>
        <template slot="start">

            <router-link tag="b-navbar-item" to="/">
                Home
            </router-link>

            <router-link tag="b-navbar-item" to="/about">
                About
            </router-link>

            <router-link tag="b-navbar-item" to="/contact">
                Contact
            </router-link>

        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">

                    <router-link
                            to="/login"
                            v-slot="{ href, route, navigate, isActive }"
                            v-if="!user.loggedIn"
                    >
                        <b-button type="is-primary" :active="isActive" :href="href" @click="navigate">
                            <strong>Log in</strong>
                        </b-button>
                    </router-link>


                    <b-dropdown
                            v-model="navigation"
                            position="is-bottom-left"
                            append-to-body
                            aria-role="menu"
                            v-if="user.loggedIn">
                        <a
                                class="navbar-item"
                                slot="trigger"
                                role="button">
                            <div class="mr-5">{{user.data.displayName}}</div>
                            <figure class="image is-32x32">
                                <img :src="user.data.photo" class="is-rounded no-max-height">
                            </figure>
                        </a>

                        <b-dropdown-item custom aria-role="menuitem">
                            Logged in as <b>{{user.data.email}}</b>
                        </b-dropdown-item>
                        <hr class="dropdown-divider">
                        <b-dropdown-item value="logout" aria-role="menuitem" v-on:click="signOut">
                            <!--TODO get icon pack-->
                            <b-icon icon="logout"></b-icon>
                            Log out

                        </b-dropdown-item>
                    </b-dropdown>





                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>

    import { mapGetters } from "vuex";
    import firebase from "firebase";

    export default {
        name: "Navbar",
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        },
        methods: {
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace({
                            name: "Home"
                        });
                    });
            }
        }
    };
</script>

<style scoped>
    .router-link-exact-active {
        color: #7957d5;
    }
    .no-max-height{
        max-height: unset !important;
    }
    .mr-5{
        margin-right: .5rem;
    }
    .navbar-h{
        height: 3.25rem;
    }
</style>