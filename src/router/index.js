import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../views/Index.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('../views/Home.vue')
                },
                {
                    path: '/202501',
                    name: '202501',
                    component: () => import('../views/2025/202501.vue')
                },
                {
                    path: '/202502',
                    name: '202502',
                    component: () => import('../views/2025/202502.vue')
                },
                {
                    path: '/202503',
                    name: '202503',
                    component: () => import('../views/2025/202503.vue')
                },
            ]
        },
    ],
})

export default router
