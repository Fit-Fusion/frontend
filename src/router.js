import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './pages/About.vue';
import Home from './pages/Home.vue';
import Classes from './pages/Classes.vue';
import Store from './pages/Store.vue';
import Login from './pages/Login.vue';
import ClientProfile from './pages/ClientProfile.vue';
import TrainerProfile from './pages/TrainerProfile.vue';


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
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/client-profile',
        name: 'ClientProfile',
        component: ClientProfile
    },
    {
        path: '/trainer-profile',
        name: 'TrainerProfile',
        component: TrainerProfile
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;