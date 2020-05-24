import Vue from 'vue'
import VueRouter from 'vue-router'
import Assignments from '../components/Assignments.vue'
import Assignment from "../components/Assignment";
import About from "../components/About"
import Contact from "../components/Contact"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Assignments
    },
    {
        path: '/assignment/:id',
        component: Assignment,
        name: 'Assignment'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '/contact',
        component: Contact,
        name: 'Contact'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    title: "This is a title",
    routes
})

export default router
