import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutUs from './pages/AboutUs.vue';
import Home from './pages/Home.vue';
import Classes from './pages/Classes.vue';
import Store from './pages/Store.vue';
import Login from './pages/Login.vue';
import SignUp from './pages/SignUp.vue';
import ClientProfile from './pages/ClientProfile.vue';
import TrainerProfile from './pages/TrainerProfile.vue';
import CalorieCalculator from './pages/CalorieCalculator.vue';
import AdminProfile from './pages/AdminProfile.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about-us', name: 'AboutUs', component: AboutUs },
    { path: '/classes', name: 'classes', component: Classes },
    { path: '/store', name: 'Store', component: Store },
    { path: '/login', name: 'Login', component: Login },
    { path: '/sign-up', name: 'SignUp', component: SignUp },
    { path: '/profile/client/:clientId', name: 'ClientProfile', component: ClientProfile, props: true },
    { path: '/profile/trainer/:trainerId', name: 'TrainerProfile', component: TrainerProfile, props: true },
    { path: '/calorie-calculator', name: 'CalorieCalculator', component: CalorieCalculator },
    { path: '/profile/admin/:adminId', name: 'AdminProfile', component: AdminProfile, props: true }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;