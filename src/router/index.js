import {createRouter, createWebHistory} from 'vue-router'
import PageAbout from '@/views/PageAbout.vue'
import PageHome from '@/views/PageHome.vue'
import PagePostDetail from '@/views/PagePostDetail.vue'

const routes = [
    {path: '/', name: 'PageHome', component: PageHome},
    {path: '/about', name: 'PageAbout', component: PageAbout},
    {path: '/post/:id', name: 'PagePostDetail', component: PagePostDetail}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router