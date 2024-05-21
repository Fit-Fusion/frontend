import Vue from 'vue';
import App from './pages/App.vue';
import router from './router';
import store from './store';

new Vue({
    el:'#app',
    name: 'FitFusion',
    router,
    store,
    render: h => h(App)
})