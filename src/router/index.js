import { createRouter, createWebHistory } from 'vue-router'

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
                    // 修改路由规则，确保匹配类似 /2025/202503 的路径
                    path: '/:year/:dataPath', 
                    name: 'eventView',
                    component: () => import('../views/EventView.vue')
                },
            ]
        },
    ],
})

export default router
