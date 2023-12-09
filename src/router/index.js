import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/test',
                    name: 'test',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/df-1',
                    name: 'df-1',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/df',
                    name: 'df',
                    component: () => import('@/views/Dashboard.vue')
                },
            ]
        },
    ]
});

export default router;
