import {createRouter, createWebHistory} from 'vue-router'
import PageAbout from '@/views/PageAbout.vue'
import PageHome from '@/views/PageHome.vue'

const routes = [
    {path: '/', name: 'PageHome', component: PageHome},
    {path: '/about', name: 'PageAbout', component: PageAbout}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router