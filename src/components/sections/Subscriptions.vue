<template>
    <section class="subscriptions-section section">
        <h1 class="subscriptions-section__title"> Subscriptions </h1>

        <ul class="subscriptions">
            <li class="subscription">
                <h4 class="subscription__title">1 Month</h4>
                <p class="subscription__price">$5.99</p>
                <p class="subscription__description">
                    <i>For one month:</i>
                    <br />Get access to all the content and updates, plus early bird discounts on new releases
                </p>
                <button class="subscription__button">Get Now</button>
            </li>

            <li class="subscription">
                <h4 class="subscription__title">2 Months</h4>
                <p class="subscription__price">$9.99</p>
                <p class="subscription__description">
                    <i>For two months:</i>
                    <br />Get access to all the content and updates, plus early bird discounts on new releases
                </p>
                <button class="subscription__button">Get Now</button>
            </li>

            <li class="subscription">
                <h4 class="subscription__title"> 3 Months</h4>
                <p class="subscription__price">$14.99</p>
                <p class="subscription__description">
                    <i>For three months:</i>
                    <br />Get access to all the content and updates, plus early bird discounts on new releases
                </p>
                <button class="subscription__button">Get Now</button>
            </li>

            <li class="subscription">
                <h4 class="subscription__title">6 Months</h4> 
                <p class="subscription__price">$24.99</p>
                <p class="subscription__description">
                    <i>For six month:</i>
                    <br />Get access to all the content and updates, plus early bird discounts on new releases
                </p>
                <button class="subscription__button">Get Now</button>
            </li>

            <li class="subscription">
                <h4 class="subscription__title">12 Months</h4> 
                <p class="subscription__price">$39.99</p>
                <p class="subscription__description">
                    <i>For twelve months:</i>
                    <br />Get access to all the content and updates, plus early bird discounts on new releases
                </p>
                <button class="subscription__button">Get Now</button>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class SubscriptionSection extends Vue {
    public name = 'SubscriptionSection';   

}
</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.subscriptions-section {
    background: rgba(7, 7, 7, 0.5);
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
    background: linear-gradient(
      45deg,
      rgba(14, 30, 14, 0.5),
      rgba(7, 7, 7, 0.5)
    ), url("/assets/images/test.jpg");
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