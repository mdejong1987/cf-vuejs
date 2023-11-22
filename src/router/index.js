import {createRouter, createWebHistory} from 'vue-router'
import PageAbout from '@/views/PageAbout.vue'
import PageHome from '@/views/PageHome.vue'
import PagePostDetail from '@/views/PagePostDetail.vue'
import ThePortfolio from '@/views/portfolio.vue'
import TheContact from '@/views/contact.vue'

const routes = [
    {path: '/', name: 'PageHome', component: PageHome},
    {path: '/about', name: 'PageAbout', component: PageAbout},
    {path: '/post/:slug', name: 'PagePostDetail', component: PagePostDetail},
    {path: '/portfolio', name: 'portfolio', component: ThePortfolio},
    {path: '/contact', name: 'contact', component: TheContact},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router