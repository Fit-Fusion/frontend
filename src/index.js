import Vue from 'vue';
import App from './pages/App.vue';
import router from './router';

new Vue({
    el:'#app',
    name: 'FitFusion',
    router,
    render: h => h(App)
})