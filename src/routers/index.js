import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/contact',
        name: "Contact",
        component: Contact
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
