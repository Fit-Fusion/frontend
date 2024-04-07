<template>
    <section class="main-section section">
        <p class="main-section__motivation">
            Sweat Today, Shine Tomorrow
        </p>
        <h1 class="main-section__title">
            STRONGER
        </h1>
        <h1 class="main-section__title hollow">
            EVERY DAY
        </h1>
        <h1 class="main-section__title">
            FITTER
        </h1>
        <h1 class="main-section__title hollow">
            FOREVER
        </h1>
        <p class="main-section__description">
            Embark on a transformative fitness journey at FitFusion where every workout is a step towardsa healthier, stronger you.<br />
            Our expert trainers and cutting-edge equipment create an atmosphere where failure is impossible.
        </p>
        <div class="main-section__buttons">
            <button class="main-section__button">
                Get Started
            </button>
            <button class="main-section__button main-section__button_transparent">
                Learn More
            </button>
        </div>
        <div class="main-section__stats">
            <div class="main-section__stat">
                <span class="main-section__stat-number hollow">1200+</span>
                <span class="main-section__stat-text">Members</span>
            </div>
            <div class="main-section__stat">
                <span class="main-section__stat-number hollow">30+</span>
                <span class="main-section__stat-text">Clients</span>
            </div>
            <div class="main-section__stat">
                <span class="main-section__stat-number hollow">10+</span>
                <span class="main-section__stat-text">Years</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class MainSection extends Vue {
    public name = 'MainSection';   

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.main-section {
    background: url("/assets/images/bodybuilder-faded.png") center no-repeat;
    background-size: cover;
    padding-top: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

    &__motivation {
        color: $theme-color;
        padding-bottom: 0.5rem;
    }

    &__title {
        font-size: 3.8rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-bottom: -1rem;
    }

    &__description {
        max-width: 55%;
        padding: 2rem 0 3rem 0;
    }

    &__button {
        width: 10rem;
        margin-right: 1rem;
        height: 2.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-weight: 500;
        border: none;
        background-color: $theme-color;
    }

    &__button_transparent {
        color: $white;
        border: 1px solid $white;
        background-color: transparent;
    }

    &__stats {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 22rem;
        padding: 2rem 0;
    }

    &__stat {
        display: flex;
        flex-direction: column;
    }

    &__stat-number {
        font-size: 2rem;
        font-weight: 900;
    }
}

</style>