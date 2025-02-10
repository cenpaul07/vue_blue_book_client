import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '@/components/IndexPage.vue';
import MessageDisplay from '@/components/MessageDisplay.vue';

const routes = [
    {
        path: '/',
        name: 'RandomEntry',
        component: IndexPage,
    },
    {
        path: '/',
        name: 'MessageDisplay',
        component: MessageDisplay,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;