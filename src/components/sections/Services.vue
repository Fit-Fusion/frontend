<template>
    <section class="services section">
        <div class="service service__weight">
            <h3 class="service__title">Weight Lifting</h3>
            <p class="service__description">Train like an athlete with our challenging and effective crossfit program.</p>
        </div>
        <div class="service service__crossfit">
            <h3 class="service__title">Crossfit</h3>
            <p class="service__description">Train like an athlete with our challenging and effective crossfit program.</p>
        </div>
        <div class="service service__boxing">
            <h3 class="service__title">Boxing</h3>
            <p class="service__description">Learn self-defense and improve your fitness with our martial arts programs.</p>
        </div>
        <div class="service service__cardio">
            <h3 class="service__title">Cardio</h3>
            <p class="service__description">Join our cardio group classes or train on your own with our equipment.</p>
        </div>
        <div class="service service__spa">
            <h3 class="service__title">Aqua & Spa</h3>
            <p class="service__description">Improve your flexibility with aqua fitness. Relax and rejuvenate with our post-workout spa treatments</p>
        </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class ServicesSection extends Vue {
    public name = 'ServicesSection';  

}
</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.service {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
    margin-top: 1.5rem;

    &__weight {
        background: url("/assets/images/test.jpg");
        background-size: cover;
    }

    &__crossfit {
        background: url("/assets/images/test.jpg");
        background-size: cover; 
    }

    &__boxing {
        background: url("/assets/images/test.jpg");
        background-size: cover;
    }

    &__cardio {
        background: url("/assets/images/test.jpg");
        background-size: cover; 
    }

    &__spa {
        background: url("/assets/images/test.jpg");
        background-size: cover; 
    }

    &__image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &__title {
        text-align: center;
        font-size: 2rem;
        margin-bottom: 5rem;
        animation: fade-in 1s ease-in-out forwards;
    }

    &__description {
        position: absolute;
        width: 50%;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        transform: translateX(100%); /* Slides description in from right */
        animation: slide-in-right 4s ease-in-out forwards;
    }
}

@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slide-in-right {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

</style>