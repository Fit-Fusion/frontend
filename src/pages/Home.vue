<template>
    <div class="page-container">
        <MainSection />
        <ServicesSection />
        <SubscriptionSection />
        <ReviewSection />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainSection from '../components/sections/Main.vue';
import ServicesSection from '../components/sections/Services.vue';
import SubscriptionSection from '../components/sections/Subscriptions.vue';
import ReviewSection from '../components/sections/Review.vue';

@Component({
    components: {
        MainSection,
        ServicesSection,
        SubscriptionSection,
        ReviewSection
    }
}) 
export default class Home extends Vue {
    public name = 'Home';
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';
</style>