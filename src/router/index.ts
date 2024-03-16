import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import MfpTab from "@/components/tab/MfpTab.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '',
        component: MfpTab,
        redirect: '/inicio',
        children: [
            {
                path: '/inicio',
                name: 'Home',
                component: () => import('@/views/home/HomePage.vue')
            },
            {
                path: '/movimentacoes',
                name: 'Movements',
                component: () => import('@/views/movements/MovementsPage.vue')
            },
            {
                path: '/contas',
                name: 'Accounts',
                component: () => import('@/views/accounts/AccountsPage.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
