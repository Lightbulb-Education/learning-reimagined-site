<template>
    <section>
        <FormModal/>
        <h1 class="title">Your Assignments</h1>

        <b-table
                :data="isEmpty ? [] : data"
                :bordered="isBordered"
                :striped="isStriped"
                :narrowed="isNarrowed"
                :hoverable="isHoverable"
                :loading="isLoading"
                :focusable="isFocusable"
                :mobile-cards="hasMobileCards">

            <template slot-scope="props">

                <b-table-column field="name" label="Assignment Name">
                    {{ props.row.title }}
                </b-table-column>


                <b-table-column field="due" label="Due">
                    <span class="tag is-warning">
                        {{ props.row.due.toDate().toLocaleString() }}
                    </span>
                </b-table-column>

                <b-table-column label="Open">

                    <router-link
                            :to="{ name: 'Assignment', params: {id: props.row.id}}"
                    >
                        <b-button type="is-primary">
                            <strong>Open</strong>
                        </b-button>
                    </router-link>
                </b-table-column>
            </template>

            <template slot="empty">
                <section class="section">
                    <div class="content has-text-grey has-text-centered">
                        <p>
                            <b-icon
                                    icon="emoticon-sad"
                                    size="is-large">
                            </b-icon>
                        </p>
                    </div>
                </section>
            </template>
        </b-table>


    </section>
</template>

<script>
    import {store} from '../store'
    import FormModal from "./FormModal";

    export default {
        data() {
            return {
                data: store.assignments,
                // isEmpty: store.assignments.length != 0,
                isEmpty: false,
                isBordered: false,
                isStriped: false,
                isNarrowed: false,
                isHoverable: false,
                isFocusable: false,
                isLoading: true,
                hasMobileCards: true,
            }
        },
        mounted() {
            this.fetchData()

        },
        methods: {
            fetchData() {
                var self = this

                self.loading = true
                store.db.collection('assignments')
                    .onSnapshot(function (querySnapshot) {
                        const assignments = []
                        querySnapshot.forEach(function (doc) {
                            const assignment = doc.data()
                            assignment.id = doc.id
                            assignments.push(assignment)
                        });
                        console.log(self.assignments)
                        self.isLoading = false
                        self.data = assignments
                    });
            }

        },
        components: {FormModal}
    }
</script>