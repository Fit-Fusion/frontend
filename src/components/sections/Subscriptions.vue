<template>
    <section class="subscriptions-section">
        <h1 class="subscriptions-section__title"> Subscriptions </h1>

        <ul class="subscriptions">
            <li 
                v-for="subscription in subscriptions"
                class="subscription"
                :key="subscription.id"
            >
                <h4 class="subscription__title">{{ subscription.duration_months }} monnths Plan</h4>
                <p class="subscription__price">${{ subscription.price }}</p>
                <p class="subscription__description">
                    <i>For {{ subscription.duration_months}} months:</i>
                    <br /> {{ subscription.description }}
                </p>
                <button class="subscription__button">Get Now</button>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Subscription } from 'abstracts/Interfaces';
import { Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class SubscriptionSection extends Vue {
    public name = 'SubscriptionSection';   

    @Prop() subscriptions: Subscription[];
}
</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.subscriptions-section {
    background: url('/assets/images/subscription-bg.webp');
    background-size: cover;
    padding-top: 1.5rem;
    margin-top: 4rem;

    &__title {
        text-align: center;
        color: $white;
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }
}

.subscriptions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
}

.subscription {
    background: rgba(13, 14, 13, 0.5);
    border-radius: 1rem 1rem 0 0;
    text-align: center;
    width: 25rem;
    margin: 1rem;

    &__title {
        color: $white;
        font-size: 1.5rem;
        background-color:rgb(17, 17, 17);
        padding: 1rem 2rem 1rem 2rem;
        border-radius: inherit
    }

    &__price {
        color: $white;
        font-size: 1.5rem;
        font-weight: 600;
        padding: 0.5rem 0 0.5rem 0; 
    }

    &__description {
        color: $white;
        font-size: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 1rem;
        width: 70%;
        margin: 0 auto;
    }

    &__button {
        width: 7rem;
        height: 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 600;
        font-family: 'Courier New', Courier, monospace;
        border: none;
        background-color: $theme-color;
        margin-bottom: 1rem;
    }

}
 
</style>