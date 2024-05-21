<template>
    <section class="trainers-section">
        <h1 class="trainers-section__title">OUR TRAINERS</h1>
        <ul class="trainers">
            <li class="trainer">
                <img 
                    src="assets/images/trainer1.webp" 
                    class="trainer__image" 
                    alt="Sarah Connor"
                />
                <p class="trainer__name">Sarah Connor</p>
                <p class="trainer__field">Cardio</p>
            </li>
            <li class="trainer">
                <img 
                    src="assets/images/trainer2.webp" 
                    class="trainer__image" 
                    alt="Micheal Johnson"
                />
                <p class="trainer__name">Micheal Johnson</p>
                <p class="trainer__field">Weight Lifting</p>
            </li>
            <li class="trainer">
                <img 
                    src="assets/images/trainer3.webp" 
                    class="trainer__image" 
                    alt="Jessica Miller"
                />
                <p class="trainer__name">Jessica Miller</p>
                <p class="trainer__field">Boxing</p>
            </li>
            <li class="trainer">
                <img 
                    src="assets/images/trainer4.webp" 
                    class="trainer__image" 
                    alt="David Smith"
                />
                <p class="trainer__name">David Smith</p>
                <p class="trainer__field">Strength Training</p>
            </li>
            <li class="trainer">
                <img 
                    src="assets/images/trainer5.webp" 
                    class="trainer__image" 
                    alt="Emily Williams"
                />
                <p class="trainer__name">Emily Williams</p>
                <p class="trainer__field">Spa</p>
            </li>
        </ul>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component 
export default class TrainersSection extends Vue {
    public name = 'TrainersSection';
}

</script>

<style lang="scss" scoped>
@import '../../scss/styles';

.trainers-section {
    background: rgb(31, 37, 51);

    &__title {
        text-align: center;
        color: $white;
        padding: 2rem;
        font-size: 2.5rem;
    }
}

.trainers {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;
}

.trainer {
    text-align: center;

    &__image {
        width: 20rem;
        height: 20rem;
        object-fit: cover;
        object-position: center;
        margin: .6rem;
        border: .2rem solid $theme-color;
    }

    &__name {   
        color: $white;
        font-size: 1.5rem;
    }

    &__field {
        color: $theme-color;
        font-style: italic;
        font-size: 1rem;
    }
}
</style>