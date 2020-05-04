<template>
    <div id="firebaseui-auth-container"></div>
</template>

<style>
    @import '~firebaseui/dist/firebaseui.css';
</style>

<script>
    import firebase from 'firebase';
    import * as firebaseui from "firebaseui"
    import {config} from '@/firebaseConfig'

    config
    export default {
        name: 'Login',
        mounted() {

            // FirebaseUI config.
            var uiConfig = {
                signInSuccessUrl: '/',
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                ],
                // tosUrl and privacyPolicyUrl accept either url string or a callback
                tosUrl: '<your-tos-url>',
                privacyPolicyUrl: '<your-tos-url>',
            };


            // Initialize the FirebaseUI Widget using Firebase.
            let ui = firebaseui.auth.AuthUI.getInstance();
            if (!ui) {
                ui = new firebaseui.auth.AuthUI(firebase.auth());
            }

            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);        },
    }
</script>

<style scoped>

</style>