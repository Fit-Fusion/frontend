import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './pages/About.vue';
import Home from './pages/Home.vue';
import Classes from './pages/Classes.vue';
import Store from './pages/Store.vue';
import ClientLogin from './pages/ClientLogin.vue';
import TrainerLogin from './pages/TrainerLogin.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/classes',
        name: 'classes',
        component: Classes
    },
    {
        path: '/store',
        name: 'Store',
        component: Store
    },
    {
        path: '/client-login',
        name: 'ClientLogin',
        component: ClientLogin
    },
    {
        path: '/trainer-login',
        name: 'TrainerLogin',
        component: TrainerLogin
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;