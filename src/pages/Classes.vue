<template>
    <section class="classes-section">
        <h2 class="classes-section__title">OUR CLASSES</h2>
        <ul class="classes">
            <li class="class">
                <button class="class__subscribe-button">Subscribe</button>
                <img 
                    src="assets/images/deadlift.webp" 
                    class="class__image" 
                    alt="deadlift"
                />
                <h4 class="class__title">FULL BODY BLAST</h4>
                <p class="class__description">The Full body program bla bfsgrhg thuthjsr sthijmnpthiwiwr oirhwrho tw iwrhowrohojwrh...</p>
            </li>

            <li class="class">
                <button class="class__subscribe-button">Subscribe</button>
                <img 
                    src="assets/images/cardio.webp" 
                    class="class__image" 
                    alt="cardio"
                />
                <h4 class="class__title">CARDIO</h4>
                <p class="class__description">The cardio program bla bfsgrhg thuthjsr sthijmnpthiwiwr oirhwrho tw iwrhowrohojwrh...</p>
            </li>

            <li class="class">
                <button class="class__subscribe-button">Subscribe</button>
                <img 
                    src="assets/images/strength-training.webp" 
                    class="class__image" 
                    alt="strength-training"
                />
                <h4 class="class__title">STRENGTH TRAINING</h4>
                <p class="class__description">The strength training program bla bfsgrhg thuthjsr sthijmnpthiwiwr oirhwrho tw iwrhowrohojwrh...</p>
            </li>

            <li class="class">
                <button class="class__subscribe-button">Subscribe</button>
                <img 
                    src="assets/images/boxing.webp" 
                    class="class__image" 
                    alt="boxing"
                />
                <h4 class="class__title">BOXING</h4>
                <p class="class__description">The boxing program bla bfsgrhg thuthjsr sthijmnpthiwiwr oirhwrho tw iwrhowrohojwrh...</p>
            </li>

            <li class="class">
                <button class="class__subscribe-button">Subscribe</button>
                <img 
                    src="assets/images/spa.webp" 
                    class="class__image" 
                    alt="spa"
                />
                <h4 class="class__title">SPA</h4>
                <p class="class__description">The spa program bla bfsgrhg thuthjsr sthijmnpthiwiwr oirhwrho tw iwrhowrohojwrh...</p>
            </li>

        </ul>
    </section> 
</template>

<script lang="ts">
import { Vue, Component} from 'vue-property-decorator';

@Component
export default class Classes extends Vue {
    public name = 'Classes';   

}
</script>

<style lang="scss" scoped>
@import '../scss/styles';

.classes-section {
    background: $black;
    color: $white;

    &__title {
        text-align: center;
        padding: 2rem;
    }

}

.classes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style: none;
}

.class {
    width: 20rem;
    margin: 1rem;

    &__image {
        width: 100%;
        border: .1rem solid $theme-color;
        border-radius: 1rem;
        margin-bottom: .5rem;
    }

    &__title {
        display: inline-block;
        border-bottom: .1rem solid $theme-color;
        margin-bottom: .3rem;
    }

    &__description {
        color: rgb(142, 140, 140);
        font-size: 1rem;
    }

    &__subscribe-button {
        position: relative;
        top: 12%;
        left: 72%;
        background-color: $theme-color;
        color: $black;
        padding: 0.3rem 0.6rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        z-index: 1; 
    }

    &__subscribe-button:hover {
        background-color: $theme-color-hover;  
        transition: all .2s ease-in;
    }
}

</style>