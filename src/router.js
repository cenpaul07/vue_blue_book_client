import { createRouter, createWebHistory } from 'vue-router';
import RandomEntry from '@/components/RandomEntry.vue';
import MessageDisplay from '@/components/MessageDisplay.vue';

const routes = [
    {
        path: '/',
        name: 'RandomEntry',
        component: RandomEntry,
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