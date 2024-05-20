<template>
    <div class="home">
        <MainSection
            :totalUsers="totalUsers"
            :totalNumberOfYears="totalNumberOfYears"
        />
        <ServicesSection 
            :areasOfConcentration="areasOfConcentration"
        />
        <SubscriptionSection 
            :subscriptions="subscriptions"
        />
        <ReviewSection 
            :reviews="reviews"
        />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainSection from '../components/sections/Main.vue';
import ServicesSection from '../components/sections/Services.vue';
import SubscriptionSection from '../components/sections/Subscriptions.vue';
import ReviewSection from '../components/sections/Review.vue';
import axios from 'axios';
import { AreaOfConcentration, Review, Subscription } from '../abstracts/Interfaces';

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

    public totalUsers = 0;
    public totalNumberOfYears = 0;
    public areasOfConcentration: AreaOfConcentration[] = [];
    public subscriptions: Subscription[] = [];
    public reviews: Review[] = [];

    private async fetchInitialData() {
        try {
            const response = await axios.get('http://localhost:5555/');
            
            return response.data;      
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    private async initializeData() {
        const initialData = await this.fetchInitialData();

        this.totalNumberOfYears = initialData.totalNumberOfYears;
        this.totalUsers = initialData.users.length;
        this.areasOfConcentration = initialData.areasOfConcentration;
        this.subscriptions = initialData.subscriptions;
        this.reviews = initialData.reviews;
    }

    mounted() {
        try {
            this.initializeData();
        } catch (error) {
            console.log('ERROR:',error)
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../scss/styles';

.home {
    @include size($width: 100%);
    @include flex($direction: column, $justify-content: flex-end);
    @include text-format();
    min-height: 100vh;

    padding: 0 1.5rem 0 1.5rem;

    background-color: $theme-background;
    color: $white;

    overflow: hidden;
}
</style>