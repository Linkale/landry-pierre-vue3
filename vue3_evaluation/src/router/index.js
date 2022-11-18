import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ListAmiibo from '../views/ListAmiibo.vue'
import DetailAmiibo from '../views/DetailAmiibo.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/list',
            name: 'listAmiibo',
            component: ListAmiibo
        },
        {
            path:'/detail/:amiiboTail',
            name: 'detailAmiibo',
            component: DetailAmiibo
        }
    ]
})

export default router