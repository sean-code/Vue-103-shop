import { createRouter, createWebHashHistory } from 'vue-router'
import Contact from '../components/Contact.vue'

const routes = [
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
