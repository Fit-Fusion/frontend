<template>
    <div id="app">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

@Component({
    components: {
        Header,
        Footer
    }
})
export default class App extends Vue {
    public name = 'App';
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';
</style>