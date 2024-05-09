import Vue from 'vue';
import VueRouter from 'vue-router';
import About from './pages/About.vue';
import Home from './pages/Home.vue';
import Classes from './pages/Classes.vue';
import Store from './pages/Store.vue';
import Login from './pages/Login.vue';
import SignUp from './pages/SignUp.vue';
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
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/client-profile/:userId',
        name: 'ClientProfile',
        component: ClientProfile,
        props: true
    },
    {
        path: '/trainer-profile',
        name: 'TrainerProfile',
        component: TrainerProfile
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;