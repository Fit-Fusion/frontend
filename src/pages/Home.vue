<template>
    <div class="page-container">
        <MainSection />
        <ServicesSection />
        <SubscriptionSection />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainSection from '../components/MainSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import SubscriptionSection from '../components/Subscriptions.vue';

@Component({
    components: {
        MainSection,
        ServicesSection,
        SubscriptionSection
    }
}) 
export default class Home extends Vue {
    public name = 'Home';
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';
</style>