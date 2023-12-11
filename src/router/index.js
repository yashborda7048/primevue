import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
// import AuthLayout from '@/layout/AuthLayout.vue';

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
                    path: '/inbox/',
                    children: [
                        {
                            path: '',
                            name: 'inbox',
                            component: () => import('@/views/inbox/index.vue') // New message
                        },
                        {
                            path: 'opgepakt',
                            name: 'inbox-opgepakt',
                            component: () => import('@/views/inbox/opgepakt.vue') // Arrested   
                        },
                        {
                            path: 'nieuwe-reactie',
                            name: 'inbox-nieuwe-reactie',
                            component: () => import('@/views/inbox/nieuwe-reactie.vue') // New response
                        },
                        {
                            path: 'wacht-op-reactie',
                            name: 'inbox-wacht-op-reactie',
                            component: () => import('@/views/inbox/wacht-op-reactie.vue') // Wait for response
                        },
                        {
                            path: 'ticket-gesloten',
                            name: 'inbox-ticket-gesloten',
                            component: () => import('@/views/inbox/ticket-gesloten.vue') // Ticket closed
                        },
                    ]
                },
            ]
        },
        // {
        //     path: '/login',
        //     name: 'login',
        //     component: AuthLayout,
        //     children: [
        //         {
        //             path: '/',
        //             name: 'login-page',
        //             component: () => import('@/views/Login.vue')
        //         },
        //     ]
        // },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/views/404.vue')
        },
    ]
});

export default router;