<template>
    <section>
        <b-modal :active.sync="isComponentModalActive"
                 v-bind:can-cancel="['escape', 'x']"
                 :on-cancel="modalClosed"
                 aria-role="dialog"
                 aria-modal>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScobRftECYKdoSLZnttSvvMXqQOHJJFxtl60FNSXuZ0sEUSsQ/viewform?embedded=true"
                    class="form" frameborder="0" marginheight="0" marginwidth="0">Loading…
            </iframe>
        </b-modal>
    </section>
</template>

<script>
    import {store} from '../store'
    import Cookies from 'js-cookie'

    export default {
        data() {
            return {
                isComponentModalActive: false,
            }
        },
        mounted() {
            if (!store.formClosed) {
                this.openModal()
            }
        },
        methods: {
            openModal() {
                this.isComponentModalActive = true
            },
            modalClosed() {
                Cookies.set('formClosed', true)
                store.formClosed = true
            }
        }
    }
</script>

<style>
    iframe.form {
        width: 100%;
        height: 70vh;
    }
</style>