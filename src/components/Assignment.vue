<template>
    <div>
        <b-button type="is-dark" tag="router-link" to="/">
            <b class="title is-5 has-text-white">Back to Assignments</b>
        </b-button>

        <br>
        <br>

        <div :if="assignment" class="">

            <h1 class="title is-2">{{assignment.title}}</h1>
            <h2 v-if="assignment.due" class="subtitle">{{"Due: " + assignment.due.toDate().toLocaleString()}}</h2>

            <div class="content" v-html="assignment.content"></div>
        </div>

    </div>

</template>

<script>
    import {store} from '../store'

    export default {
        data() {
            return {
                id: this.$route.params.id,
                assignment: {}
            }
        },
        name: "Assignment",
        mounted() {
            this.fetchData()
        },
        watch: {
            $route() {
                this.fetchData()
            }
        },
        methods: {
            fetchData() {
                const loadingComponent = this.$buefy.loading.open()

                const self = this;
                const id = this.$route.params.id;

                self.loading = true
                store.db.collection('assignments').doc(id)
                    .onSnapshot(function (doc) {
                        const assignment = doc.data()
                        if (!assignment)
                            window.location.href = '/'

                        assignment.id = doc.id

                        self.assignment = assignment
                        loadingComponent.close()
                    });
            }
        }
    }
</script>

<style scoped>

</style>