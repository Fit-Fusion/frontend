<template>
    <section class="trainers-section">
        <h1 class="trainers-section__title">OUR TRAINERS</h1>
        <ul class="trainers">
            <li class="trainer">
                <img 
                    src="assets/images/trainer1.webp" 
                    class="trainer__image" 
                    alt="Alexander Alexandrovich"
                />
                <p class="trainer__name">Alexander Alexandrovich</p>
            </li>
            <li class="trainer">
                <img 
                    src="assets/images/trainer2.webp" 
                    class="trainer__image" 
                    alt="Alexander Alexandrovich"
                />
                <p class="trainer__name">Kirill Avgustinovich</p>
            </li>
            <li class="trainer">
                <img 
                    src="assets/images/trainer3.webp" 
                    class="trainer__image" 
                    alt="Alexander Alexandrovich"
                />
                <p class="trainer__name">Viktoriya Maximovich</p>
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
        width: 25rem;
        height: 25rem;
        object-fit: cover;
        object-position: center;
        margin: 1rem;
        border: .2rem solid $theme-color;
    }

    &__name {   
        color: $white;
        font-size: 1.5rem;
    }

    &__title {
        color: $theme-color;
    }
}
</style>